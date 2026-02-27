import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 200;

// Build frame URLs - these are in the project root, imported via Vite glob
const frameModules = import.meta.glob("/ezgif-frame-*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// Sort numerically and extract URLs
const frameSources: string[] = Object.keys(frameModules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/(\d+)/)?.[1] || "0");
    const numB = parseInt(b.match(/(\d+)/)?.[1] || "0");
    return numA - numB;
  })
  .map((key) => frameModules[key]);

const ScrollFrameBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef({ value: 0 });
  const [ready, setReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images = imagesRef.current;
    const img = images[index];
    if (!img?.complete || !img.naturalWidth) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scale = Math.max(
      canvas.width / img.naturalWidth,
      canvas.height / img.naturalHeight
    );
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;
    ctx.drawImage(img, x, y, w, h);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || frameSources.length === 0) return;

    const images: HTMLImageElement[] = [];
    let loaded = 0;
    const total = frameSources.length;

    frameSources.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === 1) {
          renderFrame(0);
          setReady(true);
        }
      };
      images.push(img);
    });
    imagesRef.current = images;

    // GSAP ScrollTrigger - scrub through frames based on entire page scroll
    const tween = gsap.to(frameIndexRef.current, {
      value: total - 1,
      ease: "none",
      snap: "value",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: () => {
          renderFrame(Math.round(frameIndexRef.current.value));
        },
      },
    });

    const handleResize = () =>
      renderFrame(Math.round(frameIndexRef.current.value));
    window.addEventListener("resize", handleResize);

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, [prefersReducedMotion, renderFrame]);

  if (frameSources.length === 0 || prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 0,
        opacity: ready ? 0.45 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    />
  );
};

export default ScrollFrameBackground;
