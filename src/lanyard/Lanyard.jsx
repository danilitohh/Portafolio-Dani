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
  const cardVisual = useRef();
  const hasStartedSwing = useRef(false);
  const vec = useMemo(() => new THREE.Vector3(), []);
  const ang = useMemo(() => new THREE.Vector3(), []);
  const rot = useMemo(() => new THREE.Vector3(), []);
  const dir = useMemo(() => new THREE.Vector3(), []);
  const hookProjection = useMemo(() => new THREE.Vector3(), []);
  const { nodes, materials } = useGLTF(cardGLB);
  const hookLocalPoint = useMemo(() => {
    nodes.clip.geometry.computeBoundingBox();
    const bounds = nodes.clip.geometry.boundingBox;
    if (!bounds) return new THREE.Vector3(0, 1.229, 0);
    return new THREE.Vector3(
      (bounds.min.x + bounds.max.x) / 2,
      bounds.max.y,
      (bounds.min.z + bounds.max.z) / 2,
    );
  }, [nodes.clip.geometry]);
  const lastMotion = useRef({ anchorX: Number.NaN, hookX: Number.NaN, hookY: Number.NaN });
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
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (!fixed.current || !j1.current || !j2.current || !j3.current || !card.current || !cardVisual.current) {
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
    cardVisual.current.updateWorldMatrix(true, false);
    hookProjection.copy(hookLocalPoint);
    cardVisual.current.localToWorld(hookProjection);
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
      window.dispatchEvent(
        new CustomEvent("portfolio-lanyard-motion", {
          detail: {
            anchorX,
            hookX,
            hookY,
            textureUrl: lanyardImage || defaultLanyardImage,
            width: lanyardWidth,
          },
        }),
      );
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
            ref={cardVisual}
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
