import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Eagerly import all ezgif frames from root
const frameModules = import.meta.glob("/ezgif-frame-*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// Sort frames numerically
const frameSources = Object.entries(frameModules)
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/(\d+)/)?.[1] || "0");
    const numB = parseInt(b.match(/(\d+)/)?.[1] || "0");
    return numA - numB;
  })
  .map(([, url]) => url as string);

const TOTAL_FRAMES = frameSources.length;

const ScrollFrameAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef({ value: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const fallbackSrc = useMemo(
    () => frameSources[Math.floor(TOTAL_FRAMES / 2)] || "",
    []
  );

  useEffect(() => {
    if (prefersReducedMotion || TOTAL_FRAMES === 0) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Preload images
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    const renderFrame = (index: number) => {
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
    };

    frameSources.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === 1) renderFrame(0);
      };
      images.push(img);
    });
    imagesRef.current = images;

    // GSAP ScrollTrigger
    const tween = gsap.to(frameIndexRef.current, {
      value: TOTAL_FRAMES - 1,
      ease: "none",
      snap: "value",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
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
  }, [prefersReducedMotion]);

  if (TOTAL_FRAMES === 0) return null;

  if (prefersReducedMotion) {
    return (
      <section
        aria-label="Product showcase"
        className="relative h-screen flex items-center justify-center bg-background"
      >
        <img
          src={fallbackSrc}
          alt="Janus' Crypto Sisig sizzling showcase"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      aria-label="Scroll-driven sisig showcase animation"
      className="relative"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default ScrollFrameAnimation;
