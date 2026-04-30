"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CursorParticles() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isTouchOrMobile =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchOrMobile) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      0.1,
      100,
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const trailLength = 22;
    const pixelGeometry = new THREE.PlaneGeometry(1, 1);
    const trail: THREE.Mesh[] = [];
    const trailTargets = Array.from({ length: trailLength }, () => ({
      x: 0,
      y: 0,
      z: 0,
    }));
    const pointer = { x: 0, y: 0, active: false };

    for (let index = 0; index < trailLength; index++) {
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(index % 2 === 0 ? "#52b788" : "#95d5b2"),
        transparent: true,
        opacity: 0.88 - index * 0.03,
      });
      const pixel = new THREE.Mesh(pixelGeometry, material);
      const size = 8 - index * 0.18;
      pixel.scale.set(size, size, 1);
      pixel.position.z = -index * 0.02;
      trail.push(pixel);
      scene.add(pixel);
    }

    const onPointerMove = (event: MouseEvent) => {
      const x = event.clientX - window.innerWidth / 2;
      const y = window.innerHeight / 2 - event.clientY;

      pointer.x = x;
      pointer.y = y;
      pointer.active = true;

      if (!trailTargets[0].x && !trailTargets[0].y) {
        for (let index = 0; index < trailLength; index++) {
          trailTargets[index].x = x;
          trailTargets[index].y = y;
        }
      }
    };

    const onResize = () => {
      camera.left = window.innerWidth / -2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = window.innerHeight / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("resize", onResize);

    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      if (pointer.active) {
        trailTargets[0].x += (pointer.x - trailTargets[0].x) * 0.35;
        trailTargets[0].y += (pointer.y - trailTargets[0].y) * 0.35;

        for (let index = 1; index < trailLength; index++) {
          trailTargets[index].x +=
            (trailTargets[index - 1].x - trailTargets[index].x) * 0.28;
          trailTargets[index].y +=
            (trailTargets[index - 1].y - trailTargets[index].y) * 0.28;
        }
      }

      for (let index = 0; index < trailLength; index++) {
        const pixel = trail[index];
        const current = trailTargets[index];
        const next = trailTargets[Math.max(index - 1, 0)];
        const dx = next.x - current.x;
        const dy = next.y - current.y;
        const speed = Math.min(Math.hypot(dx, dy), 8);
        const stretch = 1 + speed * 0.08;
        const baseSize = Math.max(4.2, 8 - index * 0.18);

        pixel.position.x = current.x;
        pixel.position.y = current.y;
        pixel.rotation.z = Math.atan2(dy, dx);
        pixel.scale.set(baseSize * stretch, baseSize, 1);
        (pixel.material as THREE.MeshBasicMaterial).opacity = Math.max(
          0.16,
          0.9 - index * 0.03,
        );
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);

      trail.forEach((pixel) => {
        scene.remove(pixel);
        (pixel.material as THREE.Material).dispose();
      });

      pixelGeometry.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
