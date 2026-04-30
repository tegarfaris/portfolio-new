"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroOrb3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    interface Particle {
      mesh: THREE.Mesh;
      vx: number;
      vy: number;
      vz: number;
      life: number;
      maxLife: number;
      scale: number;
    }

    const particles: Particle[] = [];
    const pointer = { x: 0, y: 0 };
    let lastCursorPos = { x: 0, y: 0 };

    const particleGeometry = new THREE.SphereGeometry(1, 8, 8);
    const createParticle = (x: number, y: number, z: number = 0) => {
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#52b788"),
        transparent: true,
        opacity: 0.8,
      });
      const mesh = new THREE.Mesh(particleGeometry, material);
      mesh.position.set(x, y, z);
      const scale = Math.random() * 0.5 + 0.3;
      mesh.scale.set(scale, scale, scale);

      const velocity = {
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        vz: (Math.random() - 0.5) * 2,
      };

      const particle: Particle = {
        mesh,
        ...velocity,
        life: 1,
        maxLife: 1,
        scale,
      };

      particles.push(particle);
      scene.add(mesh);
      return particle;
    };

    const onPointerMove = (event: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      pointer.x = x * 50;
      pointer.y = y * 50;

      // Create particles based on cursor movement distance
      const distance = Math.sqrt(
        Math.pow(pointer.x - lastCursorPos.x, 2) +
          Math.pow(pointer.y - lastCursorPos.y, 2),
      );

      if (distance > 2) {
        for (let i = 0; i < Math.ceil(distance / 3); i++) {
          createParticle(
            pointer.x + (Math.random() - 0.5) * 10,
            pointer.y + (Math.random() - 0.5) * 10,
          );
        }
        lastCursorPos = { x: pointer.x, y: pointer.y };
      }
    };

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("resize", onResize);

    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.life -= 0.015;

        if (particle.life <= 0) {
          scene.remove(particle.mesh);
          (particle.mesh.geometry as THREE.BufferGeometry).dispose();
          (particle.mesh.material as THREE.Material).dispose();
          particles.splice(i, 1);
        } else {
          particle.mesh.position.x += particle.vx;
          particle.mesh.position.y += particle.vy;
          particle.mesh.position.z += particle.vz;

          particle.vx *= 0.98;
          particle.vy *= 0.98;
          particle.vz *= 0.98;

          (particle.mesh.material as THREE.MeshBasicMaterial).opacity =
            particle.life * 0.8;

          const scale = particle.scale * Math.max(particle.life, 0);
          particle.mesh.scale.set(scale, scale, scale);

          particle.mesh.rotation.x += 0.03;
          particle.mesh.rotation.y += 0.05;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);

      particles.forEach((particle) => {
        scene.remove(particle.mesh);
        (particle.mesh.geometry as THREE.BufferGeometry).dispose();
        (particle.mesh.material as THREE.Material).dispose();
      });

      particleGeometry.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
