import { useEffect, useRef, useState } from "react";
import "./Preloader.css";

interface PreloaderProps {
  onComplete: () => void;
}

const palette = [
  { r: 217, g: 119, b: 54 }, // amber-600
  { r: 242, g: 192, b: 131 }, // amber-400
  { r: 255, g: 90, b: 0 }, // amber-800
];

class PlasmaOrb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  color: { r: number; g: number; b: number };
  angle: number;
  pulseSpeed: number;

  constructor(w: number, h: number) {
    this.x = w / 2 + (Math.random() - 0.5) * (w * 0.3);
    this.y = h / 2 + (Math.random() - 0.5) * (h * 0.3);
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8;
    this.baseRadius = Math.random() * 250 + 150;
    this.radius = this.baseRadius;
    this.color = palette[Math.floor(Math.random() * palette.length)];
    this.angle = Math.random() * Math.PI * 2;
    this.pulseSpeed = 0.01 + Math.random() * 0.02;
  }

  update(w: number, h: number) {
    this.x += this.vx;
    this.y += this.vy;
    this.angle += this.pulseSpeed;
    this.radius = this.baseRadius + Math.sin(this.angle) * 40;

    const dx = w / 2 - this.x;
    const dy = h / 2 - this.y;
    this.vx += dx * 0.0001;
    this.vy += dy * 0.0001;

    this.vx *= 0.99;
    this.vy *= 0.99;

    if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.1;
    if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.radius,
    );

    gradient.addColorStop(
      0,
      `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.15)`,
    );
    gradient.addColorStop(
      0.4,
      `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.05)`,
    );
    gradient.addColorStop(
      1,
      `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`,
    );

    ctx.fillStyle = gradient;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

export function Preloader({ onComplete }: PreloaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(true);

  // Canvas Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let animationFrameId: number;

    const particles: PlasmaOrb[] = [];

    function resizeCanvas() {
      if (!canvas || !ctx) return;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < 12; i++) {
      particles.push(new PlasmaOrb(w, h));
    }

    function animateCanvas() {
      if (!ctx || w === undefined || h === undefined) return;
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";

      particles.forEach((p) => {
        p.update(w, h);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animateCanvas);
    }
    animateCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Text Sequence & Progress Logic
  useEffect(() => {
    const terminalEl = terminalRef.current;
    const barEl = barRef.current;
    const counterEl = counterRef.current;

    if (!terminalEl || !barEl || !counterEl) return;

    const sequence = [
      "// SYMBOLON OS v1.0.0",
      "OBSCURATION: ACTIVE",
      "REVELATION: PENDING",
      "FRAMEWORK: PEIRCEAN TRIAD",
      "SEMIOTICS: LOADED",
      "INITIALIZING CORE...",
    ];

    let currentLineIdx = 0;
    let currentCharIdx = 0;
    let currentLineDiv: HTMLDivElement | null = null;
    const cursorSpan = document.createElement("span");
    cursorSpan.className = "cursor";

    let isTyping = true;
    let typeTimeoutId: ReturnType<typeof setTimeout>;

    function typeSequence() {
      if (!isTyping || !terminalEl) return;

      if (currentLineIdx < sequence.length) {
        if (!currentLineDiv) {
          currentLineDiv = document.createElement("div");
          terminalEl.appendChild(currentLineDiv);
          currentLineDiv.appendChild(cursorSpan);
        }

        if (currentCharIdx < sequence[currentLineIdx].length) {
          const charNode = document.createTextNode(
            sequence[currentLineIdx].charAt(currentCharIdx),
          );
          currentLineDiv.insertBefore(charNode, cursorSpan);
          currentCharIdx++;

          typeTimeoutId = setTimeout(typeSequence, 10 + Math.random() * 25);
        } else {
          currentLineIdx++;
          currentCharIdx = 0;
          currentLineDiv = null;

          typeTimeoutId = setTimeout(typeSequence, 200 + Math.random() * 200);
        }
      } else {
        const finalDiv = document.createElement("div");
        finalDiv.className = "terminal-done";
        terminalEl.appendChild(finalDiv);
        finalDiv.appendChild(cursorSpan);
        isTyping = false;
      }
    }

    typeTimeoutId = setTimeout(typeSequence, 300);

    const DURATION = 4200;
    const startTime = Date.now();
    let progressFrameId: number;

    function updateProgress() {
      const elapsed = Date.now() - startTime;
      let progress = (elapsed / DURATION) * 100;

      if (progress < 100) {
        if (progress > 30 && progress < 32) progress = 30;
        if (progress > 70 && progress < 75) progress = 70;
        if (progress > 85 && progress < 88) progress = 85;

        const displayProgress = Math.min(Math.max(progress, 0), 100);
        if (counterEl)
          counterEl.textContent =
            Math.floor(displayProgress).toString().padStart(2, "0") + "%";
        if (barEl) barEl.style.width = displayProgress + "%";

        progressFrameId = requestAnimationFrame(updateProgress);
      } else {
        if (counterEl) counterEl.textContent = "100%";
        if (barEl) barEl.style.width = "100%";

        if (cursorSpan.parentNode) {
          cursorSpan.parentNode.insertBefore(
            document.createTextNode("ENTER"),
            cursorSpan,
          );
          cursorSpan.remove();
        }

        // initiate dismissal via sequence
        setTimeout(() => setIsVisible(false), 600); // Trigger fade CSS
        setTimeout(() => onComplete(), 1600); // Unmount after CSS fade time
      }
    }

    updateProgress();

    return () => {
      isTyping = false;
      clearTimeout(typeTimeoutId);
      cancelAnimationFrame(progressFrameId);
    };
  }, [onComplete]);

  return (
    <div
      className={`preloader-container ${!isVisible ? "preloader-hidden" : ""}`}
    >
      <canvas ref={canvasRef} className="preloader-canvas" />

      <div className="scanlines" />
      <div className="vignette" />

      <div className="preloader-header">
        <div className="preloader-nexus">
          <span>NEXUS_LINK_ESTABLISHED</span>
          <span className="preloader-nexus-node">NODE: 77.4.11</span>
        </div>
        <div ref={counterRef} className="preloader-counter">
          00%
        </div>
      </div>

      <div className="preloader-footer">
        <div ref={terminalRef} className="preloader-terminal"></div>
        <div className="progress-track">
          <div ref={barRef} className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
