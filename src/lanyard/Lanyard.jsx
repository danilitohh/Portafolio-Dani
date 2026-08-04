/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, useGLTF, useTexture } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import * as THREE from "three";

import cardGLB from "../../assets/lanyard/card.glb";
import defaultLanyardImage from "../../assets/lanyard/lanyard.png";
import portraitImage from "../../assets/portrait-danilo.png";
import "./Lanyard.css";

const BLANK_PIXEL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };
const LOGO_STOPS = [0.2, 0.45, 0.7];

function cubicPoint(start, controlA, controlB, end, amount) {
  const inverse = 1 - amount;
  return (
    inverse ** 3 * start +
    3 * inverse ** 2 * amount * controlA +
    3 * inverse * amount ** 2 * controlB +
    amount ** 3 * end
  );
}

function cubicTangent(start, controlA, controlB, end, amount) {
  const inverse = 1 - amount;
  return (
    3 * inverse ** 2 * (controlA - start) +
    6 * inverse * amount * (controlB - controlA) +
    3 * amount ** 2 * (end - controlB)
  );
}

function syncLanyardDom(domRef, { anchorX, hookX, hookY, textureUrl }) {
  if (!domRef.current?.strap?.isConnected) {
    const page = document.querySelector(".page");
    const strap = document.querySelector(".lanyard-page-strap");
    const band = document.querySelector("[data-lanyard-path]");
    const shadow = document.querySelector("[data-lanyard-path-shadow]");
    const logos = [...document.querySelectorAll("[data-lanyard-logo]")];
    if (!(page instanceof HTMLElement) || !(strap instanceof HTMLElement) || !band || !shadow) return;
    domRef.current = { page, strap, band, shadow, logos };
  }

  const { page, strap, band, shadow, logos } = domRef.current;
  const pageRect = page.getBoundingClientRect();
  const localAnchorX = anchorX - pageRect.left;
  const localHookX = hookX - pageRect.left;
  const localHookY = Math.max(96, hookY - pageRect.top);
  const horizontalTravel = localHookX - localAnchorX;
  const controlAX = localAnchorX + horizontalTravel * 0.32;
  const controlAY = localHookY * 0.32;
  const controlBX = localAnchorX + horizontalTravel * 0.68;
  const controlBY = localHookY * 0.68;
  const pathData = `M ${localAnchorX} 0 C ${controlAX} ${controlAY}, ${controlBX} ${controlBY}, ${localHookX} ${localHookY}`;

  strap.style.height = `${Math.max(window.innerHeight, localHookY + 48)}px`;
  strap.style.setProperty("--lanyard-texture", `url("${textureUrl}")`);
  band.setAttribute("d", pathData);
  shadow.setAttribute("d", pathData);

  logos.forEach((logo, index) => {
    if (!(logo instanceof HTMLElement)) return;
    const amount = LOGO_STOPS[index] ?? 0.5;
    const x = cubicPoint(localAnchorX, controlAX, controlBX, localHookX, amount);
    const y = cubicPoint(0, controlAY, controlBY, localHookY, amount);
    const tangentX = cubicTangent(localAnchorX, controlAX, controlBX, localHookX, amount);
    const tangentY = cubicTangent(0, controlAY, controlBY, localHookY, amount);
    const angle = Math.atan2(tangentY, tangentX) * (180 / Math.PI) - 90;
    logo.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${angle}deg)`;
  });

  strap.classList.add("is-positioned");
}

export default function Lanyard({
  position = [0, 0, 13.5],
  gravity = [0, -40, 0],
  fov = 16,
  transparent = true,
  frontImage = portraitImage,
  backImage = portraitImage,
  imageFit = "cover",
  lanyardImage = defaultLanyardImage,
  lanyardWidth = 1,
}) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setIsMobile(media.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.35 : 1.8]}
        gl={{
          alpha: transparent,
          antialias: !isMobile,
          powerPreference: "high-performance",
          premultipliedAlpha: true,
        }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, transparent ? 0 : 1);
          gl.setClearAlpha(transparent ? 0 : 1);
          gl.domElement.style.background = "transparent";
          scene.background = transparent ? null : new THREE.Color(0x000000);
        }}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60} interpolate>
          <Band
            isMobile={isMobile}
            frontImage={frontImage}
            backImage={backImage}
            imageFit={imageFit}
            lanyardImage={lanyardImage}
            lanyardWidth={lanyardWidth}
          />
        </Physics>
        <Environment blur={0.75} background={false}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({
  isMobile = false,
  frontImage,
  backImage,
  imageFit,
  lanyardImage,
  lanyardWidth,
}) {
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();
  const hasStartedSwing = useRef(false);
  const vec = useMemo(() => new THREE.Vector3(), []);
  const ang = useMemo(() => new THREE.Vector3(), []);
  const rot = useMemo(() => new THREE.Vector3(), []);
  const dir = useMemo(() => new THREE.Vector3(), []);
  const trackedCardPosition = useMemo(() => new THREE.Vector3(), []);
  const hookProjection = useMemo(() => new THREE.Vector3(), []);
  const hookOffset = useMemo(() => new THREE.Vector3(), []);
  const cardQuaternion = useMemo(() => new THREE.Quaternion(), []);
  const lanyardDom = useRef(null);
  const { nodes, materials } = useGLTF(cardGLB);
  const lastMotion = useRef({
    anchorX: Number.POSITIVE_INFINITY,
    hookX: Number.POSITIVE_INFINITY,
    hookY: Number.POSITIVE_INFINITY,
  });
  const segmentProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };
  const frontTexture = useTexture(frontImage || BLANK_PIXEL);
  const backTexture = useTexture(backImage || BLANK_PIXEL);

  const cardMap = useMemo(() => {
    const baseMap = materials.base.map;
    if (!frontImage && !backImage) return baseMap;

    const baseImage = baseMap.image;
    const width = baseImage.width;
    const height = baseImage.height;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) return baseMap;

    // Preserve the card body and edges from the original model texture.
    context.drawImage(baseImage, 0, 0, width, height);

    const drawFitted = (image, rect) => {
      const rectX = rect.x * width;
      const rectY = rect.y * height;
      const rectWidth = rect.w * width;
      const rectHeight = rect.h * height;
      const insetX = rectWidth * 0.045;
      const insetY = rectHeight * 0.04;
      const contentX = rectX + insetX;
      const contentY = rectY + insetY;
      const contentWidth = rectWidth - insetX * 2;
      const contentHeight = rectHeight - insetY * 2;
      const fit = imageFit === "contain" ? Math.min : Math.max;
      const scale = fit(contentWidth / image.width, contentHeight / image.height);
      const drawWidth = image.width * scale;
      const drawHeight = image.height * scale;
      const drawX = contentX + (contentWidth - drawWidth) / 2;
      const drawY = contentY + (contentHeight - drawHeight) / 2;

      context.save();
      context.fillStyle = "#f2f2f0";
      context.fillRect(rectX, rectY, rectWidth, rectHeight);
      context.beginPath();
      context.rect(contentX, contentY, contentWidth, contentHeight);
      context.clip();
      context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
      context.restore();
    };

    if (frontImage && frontTexture.image) drawFitted(frontTexture.image, FRONT_UV_RECT);
    if (backImage && backTexture.image) drawFitted(backTexture.image, BACK_UV_RECT);

    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace = THREE.SRGBColorSpace;
    composite.flipY = baseMap.flipY;
    composite.anisotropy = 16;
    composite.needsUpdate = true;
    return composite;
  }, [frontImage, backImage, imageFit, frontTexture, backTexture, materials.base.map]);

  useEffect(
    () => () => {
      if (cardMap !== materials.base.map) cardMap.dispose();
    },
    [cardMap, materials.base.map],
  );

  const [dragged, setDragged] = useState(false);
  const [hovered, setHovered] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0],
  ]);

  useEffect(() => {
    if (!hovered) return undefined;
    document.body.style.cursor = dragged ? "grabbing" : "grab";
    return () => {
      document.body.style.cursor = "";
    };
  }, [hovered, dragged]);

  useFrame((state) => {
    const currentPosition = card.current?.translation();
    if (currentPosition) {
      trackedCardPosition.set(currentPosition.x, currentPosition.y, currentPosition.z);
    }

    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      trackedCardPosition.set(vec.x - dragged.x, vec.y - dragged.y, vec.z - dragged.z);
      card.current?.setNextKinematicTranslation(trackedCardPosition);
    }

    if (!fixed.current || !j1.current || !j2.current || !j3.current || !card.current) {
      return;
    }

    if (!hasStartedSwing.current) {
      hasStartedSwing.current = true;
      card.current.applyImpulse({ x: isMobile ? 0.08 : 0.18, y: 0, z: 0 }, true);
      card.current.applyTorqueImpulse(
        { x: 0, y: isMobile ? 0.003 : 0.008, z: isMobile ? 0.006 : 0.014 },
        true,
      );
    }

    ang.copy(card.current.angvel());
    rot.copy(card.current.rotation());
    card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });

    const canvasRect = state.gl.domElement.getBoundingClientRect();
    cardQuaternion.copy(card.current.rotation());
    hookOffset.set(0, 1.565, 0).applyQuaternion(cardQuaternion);
    hookProjection.copy(trackedCardPosition).add(hookOffset);
    hookProjection.project(state.camera);

    const anchorX = canvasRect.left + canvasRect.width / 2;
    const hookX = canvasRect.left + (hookProjection.x * 0.5 + 0.5) * canvasRect.width;
    const hookY = canvasRect.top + (-hookProjection.y * 0.5 + 0.5) * canvasRect.height;
    const previous = lastMotion.current;

    if (
      Math.abs(previous.anchorX - anchorX) > 0.25 ||
      Math.abs(previous.hookX - hookX) > 0.25 ||
      Math.abs(previous.hookY - hookY) > 0.25
    ) {
      lastMotion.current = { anchorX, hookX, hookY };
      syncLanyardDom(lanyardDom, {
        anchorX,
        hookX,
        hookY,
        textureUrl: lanyardImage || defaultLanyardImage,
      });
    }
  });

  const releaseCard = (event) => {
    event.target.releasePointerCapture(event.pointerId);
    setDragged(false);
  };

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0, -1, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0, -2, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0, -3, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[0, -4.5, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onPointerUp={releaseCard}
            onPointerCancel={releaseCard}
            onPointerDown={(event) => {
              event.target.setPointerCapture(event.pointerId);
              setDragged(new THREE.Vector3().copy(event.point).sub(vec.copy(card.current.translation())));
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardMap}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 0.75}
                clearcoatRoughness={0.15}
                roughness={0.62}
                metalness={0.1}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
    </>
  );
}

useGLTF.preload(cardGLB);
