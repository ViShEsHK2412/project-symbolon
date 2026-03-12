import React, { useEffect, useRef } from "react";

export const SystemCrosshair: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    // Apply global CSS class to enforce cursor hiding on all children
    document.body.classList.add("custom-cursor-active");

    let isHovering = false;

    const moveCursor = (e: MouseEvent) => {
      // Direct DOM manipulation for zero latency, 10px offset centers the 20x20 crosshair
      container.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Determine if hovered element represents an interactive zone
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.closest('[data-cursor="interactive"]') !== null ||
        window.getComputedStyle(target).cursor === "pointer";

      if (isClickable !== isHovering) {
        isHovering = isClickable;
        if (isHovering) {
          // Lock-on state: rotate to X and scale down
          inner.classList.add("scale-[0.8]", "rotate-45");
          inner.classList.remove("scale-100", "rotate-0");
        } else {
          // Default state: straight + and full scale
          inner.classList.remove("scale-[0.8]", "rotate-45");
          inner.classList.add("scale-100", "rotate-0");
        }
      }
    };

    // Use passive listeners for maximum performance
    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Initial positioning off-screen before first move
    container.style.transform = `translate3d(-100px, -100px, 0)`;

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-[20px] h-[20px] pointer-events-none z-[9999]"
      style={{
        willChange: "transform",
      }}
    >
      <div
        ref={innerRef}
        className="relative w-full h-full scale-100 rotate-0 transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] origin-center"
        style={{ willChange: "transform" }}
      >
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#d97736] -translate-y-1/2"></div>
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#d97736] -translate-x-1/2"></div>
        {/* Center Precision Dot */}
        <div className="absolute top-1/2 left-1/2 w-[2px] h-[2px] bg-[#d97736] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </div>
    </div>
  );
};
