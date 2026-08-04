/* eslint-disable react/no-unknown-property */
"use client";

(async () => {
  const ReactMod = await import("https://esm.sh/react@19.2.8");
  const React = ReactMod.default ?? ReactMod;
  const { Suspense, useEffect, useMemo, useRef, useState } = React;
  const { createRoot } = await import("https://esm.sh/react-dom@19.2.8/client");
  const { Canvas, extend, useFrame } = await import(
    "https://esm.sh/@react-three/fiber@9.7.0?deps=react@19.2.8,react-dom@19.2.8,three@0.167.1"
  );
  const { useGLTF, useTexture } = await import(
    "https://esm.sh/@react-three/drei@10.7.7?deps=@react-three/fiber@9.7.0,react@19.2.8,react-dom@19.2.8,three@0.167.1"
  );
  const { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } = await import(
    "https://esm.sh/@react-three/rapier@2.2.0?deps=@react-three/fiber@9.7.0,react@19.2.8,react-dom@19.2.8,three@0.167.1"
  );
  const { MeshLineGeometry, MeshLineMaterial } = await import("https://esm.sh/meshline@3.3.1?deps=three@0.167.1");
  const THREE = await import("https://esm.sh/three@0.167.1");

  extend({ MeshLineGeometry, MeshLineMaterial });

  const h = React.createElement;
  const BLANK_PIXEL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
  const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
  const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };

  const cardGLB = new URL("./assets/lanyard/card.glb", import.meta.url).href;
  const defaultLanyardTexture = new URL("./assets/lanyard/lanyard.png", import.meta.url).href;
  const portraitImage = new URL("./assets/portrait-danilo.png", import.meta.url).href;

  function Lanyard({
    position = [0, 0, 30],
    gravity = [0, -40, 0],
    fov = 20,
    transparent = true,
    frontImage = null,
    backImage = null,
    imageFit = "cover",
    lanyardImage = null,
    lanyardWidth = 1,
  }) {
    const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return h(
      "div",
      { className: "lanyard-wrapper" },
      h(
        Canvas,
        {
          camera: { position, fov },
          dpr: [1, isMobile ? 1.5 : 2],
          gl: { alpha: transparent, antialias: true },
          style: { background: "transparent" },
          onCreated: ({ gl, scene }) => {
            gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
            gl.setClearAlpha(transparent ? 0 : 1);
            scene.background = transparent ? null : new THREE.Color(0x000000);
          },
        },
        h("ambientLight", { intensity: 1.65 }),
        h("directionalLight", { position: [3, 4, 5], intensity: 1.5 }),
        h("directionalLight", { position: [-2, -1, 4], intensity: 0.75 }),
        h(
          Suspense,
          { fallback: null },
          h(
            Physics,
            { gravity, timeStep: isMobile ? 1 / 30 : 1 / 60 },
            h(Band, {
              isMobile,
              frontImage,
              backImage,
              imageFit,
              lanyardImage,
              lanyardWidth,
            }),
          ),
        ),
      ),
    );
  }

  function Band({
    maxSpeed = 50,
    minSpeed = 0,
    isMobile = false,
    frontImage = null,
    backImage = null,
    imageFit = "cover",
    lanyardImage = null,
    lanyardWidth = 1,
  }) {
    const band = useRef();
    const fixed = useRef();
    const j1 = useRef();
    const j2 = useRef();
    const j3 = useRef();
    const card = useRef();
    const vec = new THREE.Vector3();
    const ang = new THREE.Vector3();
    const rot = new THREE.Vector3();
    const dir = new THREE.Vector3();
    const segmentProps = { type: "dynamic", canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
    const { nodes, materials } = useGLTF(cardGLB);
    const texture = useTexture(lanyardImage || defaultLanyardTexture);
    const frontTex = useTexture(frontImage || BLANK_PIXEL);
    const backTex = useTexture(backImage || BLANK_PIXEL);

    const cardMap = useMemo(() => {
      const baseMap = materials.base.map;
      if (!frontImage && !backImage) return baseMap;

      const baseImg = baseMap.image;
      const W = baseImg.width;
      const H = baseImg.height;
      const canvas = document.createElement("canvas");
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext("2d");
      if (!ctx) return baseMap;
      ctx.clearRect(0, 0, W, H);

      const drawFitted = (img, rect) => {
        const rx = rect.x * W;
        const ry = rect.y * H;
        const rw = rect.w * W;
        const rh = rect.h * H;
        const pick = imageFit === "contain" ? Math.min : Math.max;
        const scale = pick(rw / img.width, rh / img.height);
        const dw = img.width * scale;
        const dh = img.height * scale;
        const dx = rx + (rw - dw) / 2;
        const dy = ry + (rh - dh) / 2;
        ctx.save();
        ctx.beginPath();
        ctx.rect(rx, ry, rw, rh);
        ctx.clip();
        ctx.drawImage(img, dx, dy, dw, dh);
        ctx.restore();
      };

      if (frontImage && frontTex.image) drawFitted(frontTex.image, FRONT_UV_RECT);
      if (backImage && backTex.image) drawFitted(backTex.image, BACK_UV_RECT);

      const composite = new THREE.CanvasTexture(canvas);
      composite.colorSpace = THREE.SRGBColorSpace;
      composite.flipY = baseMap.flipY;
      composite.anisotropy = 16;
      composite.needsUpdate = true;
      return composite;
    }, [frontImage, backImage, imageFit, frontTex, backTex, materials.base.map]);

    const [curve] = useState(
      () =>
        new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]),
    );
    const [dragged, drag] = useState(false);
    const [hovered, hover] = useState(false);

    useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
    useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
    useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
    useSphericalJoint(j3, card, [
      [0, 0, 0],
      [0, 1.5, 0],
    ]);

    useEffect(() => {
      if (hovered) {
        document.body.style.cursor = dragged ? "grabbing" : "grab";
        return () => void (document.body.style.cursor = "auto");
      }
      return undefined;
    }, [hovered, dragged]);

    useFrame((state, delta) => {
      if (dragged) {
        vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
        dir.copy(vec).sub(state.camera.position).normalize();
        vec.add(dir.multiplyScalar(state.camera.position.length()));
        [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
        card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
      }
      if (fixed.current) {
        [j1, j2].forEach((ref) => {
          if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
          const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
          ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
        });
        curve.points[0].copy(j3.current.translation());
        curve.points[1].copy(j2.current.lerped);
        curve.points[2].copy(j1.current.lerped);
        curve.points[3].copy(fixed.current.translation());
        band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
        ang.copy(card.current.angvel());
        rot.copy(card.current.rotation());
        card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
      }
    });

    curve.curveType = "chordal";
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return h(
      React.Fragment,
      null,
      h(
        "group",
        { position: [0, 4, 0] },
        h(RigidBody, { ref: fixed, ...segmentProps, type: "fixed" }),
        h(
          RigidBody,
          { position: [0.5, 0, 0], ref: j1, ...segmentProps },
          h(BallCollider, { args: [0.1] }),
        ),
        h(
          RigidBody,
          { position: [1, 0, 0], ref: j2, ...segmentProps },
          h(BallCollider, { args: [0.1] }),
        ),
        h(
          RigidBody,
          { position: [1.5, 0, 0], ref: j3, ...segmentProps },
          h(BallCollider, { args: [0.1] }),
        ),
        h(
          RigidBody,
          { position: [2, 0, 0], ref: card, ...segmentProps, type: dragged ? "kinematicPosition" : "dynamic" },
          h(CuboidCollider, { args: [0.8, 1.125, 0.01] }),
          h(
            "group",
            {
              scale: 2.95,
              position: [0, -1.2, -0.05],
              onPointerOver: () => hover(true),
              onPointerOut: () => hover(false),
              onPointerUp: (event) => {
                event.target.releasePointerCapture(event.pointerId);
                drag(false);
              },
              onPointerDown: (event) => {
                event.target.setPointerCapture(event.pointerId);
                drag(new THREE.Vector3().copy(event.point).sub(vec.copy(card.current.translation())));
              },
            },
            h("mesh", { geometry: nodes.card.geometry }, h("meshPhysicalMaterial", {
              map: cardMap,
              "map-anisotropy": 16,
              clearcoat: isMobile ? 0 : 1,
              clearcoatRoughness: 0.15,
              roughness: 0.9,
              metalness: 0.8,
              transparent: true,
              alphaTest: 0.02,
              depthWrite: false,
            })),
            h("mesh", { geometry: nodes.clip.geometry, renderOrder: 3 }, h("meshStandardMaterial", {
              color: "#e4e4e4",
              metalness: 1,
              roughness: 0.18,
              envMapIntensity: 1.25,
              emissive: "#111111",
              emissiveIntensity: 0.08,
            })),
            h("mesh", { geometry: nodes.clamp.geometry, renderOrder: 4 }, h("meshStandardMaterial", {
              color: "#cfd3d9",
              metalness: 1,
              roughness: 0.22,
              envMapIntensity: 1.15,
              emissive: "#0b0b0b",
              emissiveIntensity: 0.06,
            })),
          ),
        ),
      ),
      h("mesh", { ref: band }, h("meshLineGeometry", null), h("meshLineMaterial", {
        color: "white",
        depthTest: true,
        depthWrite: false,
        resolution: isMobile ? [1000, 2000] : [1000, 1000],
        useMap: true,
        map: texture,
        repeat: [-4, 1],
        lineWidth: lanyardWidth,
      })),
    );
  }

  useGLTF.preload(cardGLB);

  function App() {
    useEffect(() => {
      document.getElementById("lanyard-fallback")?.remove();
    }, []);

    return h(Lanyard, {
      position: [0, 0, 17.5],
      gravity: [0, -40, 0],
      fov: 18,
      transparent: true,
      frontImage: portraitImage,
      backImage: portraitImage,
      imageFit: "cover",
      lanyardImage: defaultLanyardTexture,
      lanyardWidth: 1.12,
    });
  }

  const root = document.getElementById("root");
  if (root) {
    createRoot(root).render(h(App));
  }
})().catch((error) => {
  console.error("Failed to initialize lanyard portrait:", error);
  const fallback = document.getElementById("lanyard-fallback");
  if (fallback instanceof HTMLElement) {
    fallback.textContent = `Lanyard failed: ${error?.stack || error?.message || error}`;
    fallback.style.color = "#ffb4b4";
    fallback.style.textAlign = "center";
    fallback.style.padding = "1rem";
    fallback.style.lineHeight = "1.45";
    fallback.style.maxWidth = "24rem";
    fallback.style.whiteSpace = "pre-wrap";
    fallback.style.fontSize = "0.68rem";
  }
});
