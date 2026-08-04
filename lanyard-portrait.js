const cardGLB = new URL("./assets/lanyard/card.glb", import.meta.url).href;
const lanyardTexture = new URL("./assets/lanyard/lanyard.png", import.meta.url).href;
const portraitImage = new URL("./assets/portrait-danilo.png", import.meta.url).href;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = url;
  });
}

function createPortraitFrameTexture(THREE, img) {
  if (!img?.width || !img?.height) {
    return null;
  }

  const canvas = document.createElement("canvas");
  canvas.width = 1440;
  canvas.height = 1960;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return null;
  }

  const width = canvas.width;
  const height = canvas.height;
  ctx.fillStyle = "#f5f5f5";
  ctx.fillRect(0, 0, width, height);

  const photoX = 58;
  const photoY = 58;
  const photoW = width - 116;
  const photoH = height - 200;

  ctx.fillStyle = "#111111";
  ctx.fillRect(photoX - 6, photoY - 6, photoW + 12, photoH + 12);
  ctx.fillStyle = "#1a1a1a";
  ctx.fillRect(photoX, photoY, photoW, photoH);

  const scale = Math.max(photoW / img.width, photoH / img.height);
  const drawW = img.width * scale;
  const drawH = img.height * scale;
  const drawX = photoX + (photoW - drawW) / 2;
  const drawY = photoY + (photoH - drawH) / 2;

  ctx.save();
  ctx.beginPath();
  ctx.rect(photoX, photoY, photoW, photoH);
  ctx.clip();
  ctx.drawImage(img, drawX, drawY, drawW, drawH);

  const vignette = ctx.createRadialGradient(width / 2, height / 2, Math.min(width, height) * 0.16, width / 2, height / 2, Math.max(width, height) * 0.58);
  vignette.addColorStop(0, "rgba(255,255,255,0)");
  vignette.addColorStop(1, "rgba(0,0,0,0.34)");
  ctx.fillStyle = vignette;
  ctx.fillRect(photoX, photoY, photoW, photoH);
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

function buildErrorFallback(message) {
  const fallback = document.getElementById("lanyard-fallback");
  if (!(fallback instanceof HTMLElement)) {
    return;
  }

  fallback.innerHTML = `
    <div style="max-width: 24rem; padding: 1rem; text-align: center; line-height: 1.5;">
      <p style="margin: 0 0 .6rem; letter-spacing: .14em; text-transform: uppercase; font-size: .68rem; opacity: .75;">Lanyard failed</p>
      <p style="margin: 0; white-space: pre-wrap; font-size: .72rem; color: #ffb4b4;">${String(message || "Unknown error")}</p>
    </div>
  `;
}

(async () => {
  const THREE = await import("https://esm.sh/three@0.167.1");

  const root = document.getElementById("root");
  const fallback = document.getElementById("lanyard-fallback");

  if (!(root instanceof HTMLElement)) {
    return;
  }

  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(isMobile ? 20 : 18, 1, 0.1, 100);
  camera.position.set(0, 0, isMobile ? 14.2 : 11.9);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(1, 1, false);
  renderer.domElement.style.display = "block";
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.touchAction = "none";
  renderer.domElement.style.userSelect = "none";
  renderer.domElement.style.cursor = "grab";
  if ("outputColorSpace" in renderer) {
    renderer.outputColorSpace = THREE.SRGBColorSpace;
  } else {
    renderer.outputEncoding = THREE.sRGBEncoding;
  }
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  root.innerHTML = "";
  root.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 2.05));

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.15);
  keyLight.position.set(-2.5, 4, 6);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xdbe4ff, 1.4);
  fillLight.position.set(2.5, 2, 3);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xffffff, 0.65);
  rimLight.position.set(0, -1.5, 5);
  scene.add(rimLight);

  const textureLoader = new THREE.TextureLoader();
  void fetch(cardGLB, { cache: "force-cache" }).catch(() => {});

  const [frontImg, ropeTexture] = await Promise.all([
    loadImage(portraitImage),
    textureLoader.loadAsync(lanyardTexture),
  ]);

  const hanger = new THREE.Group();
  hanger.position.set(0, isMobile ? 3.75 : 4.15, 0);
  scene.add(hanger);

  const ropeHeight = isMobile ? 3.15 : 3.45;
  const ropeWidth = isMobile ? 0.1 : 0.12;
  ropeTexture.wrapS = THREE.RepeatWrapping;
  ropeTexture.wrapT = THREE.RepeatWrapping;
  ropeTexture.repeat.set(1, ropeHeight * 1.1);
  ropeTexture.colorSpace = THREE.SRGBColorSpace;

  const rope = new THREE.Mesh(
    new THREE.PlaneGeometry(ropeWidth, ropeHeight),
    new THREE.MeshBasicMaterial({
      map: ropeTexture,
      transparent: false,
      depthWrite: false,
      toneMapped: false,
    })
  );
  rope.position.set(0, -ropeHeight / 2, 0.02);
  hanger.add(rope);

  const clip = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, 0.24, 0.08),
    new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.15, roughness: 0.4 })
  );
  clip.position.set(0, 0.12, 0.05);
  hanger.add(clip);

  const portraitTexture = createPortraitFrameTexture(THREE, frontImg);
  const photoCard = new THREE.Mesh(
    new THREE.PlaneGeometry(isMobile ? 2.6 : 3.1, isMobile ? 3.74 : 4.35),
    new THREE.MeshStandardMaterial({
      map: portraitTexture,
      color: 0xffffff,
      roughness: 0.9,
      metalness: 0.02,
      side: THREE.DoubleSide,
    })
  );
  photoCard.position.set(0, -(ropeHeight - 0.05), 0.08);
  photoCard.rotation.z = 0.01;
  hanger.add(photoCard);

  let width = 1;
  let height = 1;
  const resize = () => {
    const rect = root.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };

  resize();

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(root);
  window.addEventListener("resize", resize);

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const cardTargets = [photoCard];

  let dragging = false;
  let hover = false;
  let pointerId = null;
  let angle = reducedMotion ? -0.04 : -0.07;
  let angularVelocity = 0;
  let targetAngle = angle;
  let lastPointerX = 0;
  let lastPointerTime = performance.now();
  let lastFrameTime = performance.now();
  let rafId = 0;

  const clampAngle = isMobile ? 0.42 : 0.48;
  const baseCursor = "grab";
  const activeCursor = "grabbing";

  const setPointer = (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    return rect;
  };

  const hitCard = (event) => {
    setPointer(event);
    raycaster.setFromCamera(pointer, camera);
    return raycaster.intersectObjects(cardTargets, true).length > 0;
  };

  const updateCursor = () => {
    renderer.domElement.style.cursor = dragging ? activeCursor : hover ? baseCursor : "grab";
  };

  const onPointerDown = (event) => {
    if (!cardTargets.length || event.button !== 0) {
      return;
    }

    if (!hitCard(event)) {
      return;
    }

    dragging = true;
    pointerId = event.pointerId;
    lastPointerX = event.clientX;
    lastPointerTime = performance.now();
    renderer.domElement.setPointerCapture(pointerId);
    updateCursor();
  };

  const onPointerMove = (event) => {
    const rect = setPointer(event);
    raycaster.setFromCamera(pointer, camera);
    hover = raycaster.intersectObjects(cardTargets, true).length > 0;

    if (!dragging || event.pointerId !== pointerId) {
      updateCursor();
      return;
    }

    const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
    targetAngle = clamp(-normalizedX * 1.3, -clampAngle, clampAngle);

    const now = performance.now();
    const deltaTime = Math.max((now - lastPointerTime) / 1000, 1 / 240);
    const deltaX = (event.clientX - lastPointerX) / rect.width;
    angularVelocity = clamp(deltaX / deltaTime * 0.55, -1.35, 1.35);
    lastPointerX = event.clientX;
    lastPointerTime = now;
    updateCursor();
  };

  const endDrag = (event) => {
    if (!dragging) {
      return;
    }

    if (event?.pointerId != null && event.pointerId === pointerId) {
      try {
        renderer.domElement.releasePointerCapture(pointerId);
      } catch {
        // Ignore capture release failures.
      }
    }

    dragging = false;
    pointerId = null;
    updateCursor();
  };

  renderer.domElement.addEventListener("pointerdown", onPointerDown);
  renderer.domElement.addEventListener("pointermove", onPointerMove);
  renderer.domElement.addEventListener("pointerup", endDrag);
  renderer.domElement.addEventListener("pointercancel", endDrag);
  renderer.domElement.addEventListener("pointerleave", () => {
    hover = false;
    if (!dragging) {
      updateCursor();
    }
  });
  window.addEventListener("blur", () => {
    dragging = false;
    pointerId = null;
    updateCursor();
  });

  const tick = (now) => {
    const dt = Math.min((now - lastFrameTime) / 1000, 0.033);
    lastFrameTime = now;

    if (dragging) {
      const delta = targetAngle - angle;
      angle += delta * Math.min(1, dt * 16);
      angularVelocity = delta * 10;
    } else if (!reducedMotion) {
      angularVelocity += (-angle * 9.5 - angularVelocity * 2.8) * dt;
      angle += angularVelocity * dt;
      angularVelocity *= Math.pow(0.992, dt * 60);
    }

    angle = clamp(angle, -clampAngle, clampAngle);

    hanger.rotation.z = angle;
    hanger.rotation.x = angle * 0.03;
    hanger.position.x = -Math.sin(angle) * (isMobile ? 0.08 : 0.1);
    hanger.position.y = (isMobile ? 2.55 : 2.75) - Math.abs(angle) * 0.035;

    if (!reducedMotion) {
      hanger.rotation.y = Math.sin(now * 0.00045) * 0.035;
    }

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(tick);
  };

  updateCursor();
  if (fallback instanceof HTMLElement) {
    fallback.remove();
  }

  rafId = requestAnimationFrame(tick);

  const cleanup = () => {
    resizeObserver.disconnect();
    window.removeEventListener("resize", resize);
    renderer.domElement.removeEventListener("pointerdown", onPointerDown);
    renderer.domElement.removeEventListener("pointermove", onPointerMove);
    renderer.domElement.removeEventListener("pointerup", endDrag);
    renderer.domElement.removeEventListener("pointercancel", endDrag);
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    renderer.dispose();
  };

  window.addEventListener("pagehide", cleanup, { once: true });
})().catch((error) => {
  console.error("Failed to initialize lanyard portrait:", error);
  buildErrorFallback(error?.stack || error?.message || error);
});
