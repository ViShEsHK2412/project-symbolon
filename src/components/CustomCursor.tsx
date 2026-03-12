import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Apply global CSS class to enforce cursor hiding on all children
    document.body.classList.add("custom-cursor-active");

    // Initialize GSAP quickTo for high-performance lerp
    // Use smaller duration for snappy but slightly trailing feel
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      // 12px offset centers the 24x24 cursor exactly on the pointer tip
      xTo(e.clientX - 12);
      yTo(e.clientY - 12);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Determine if hovered element represents an interactive zone
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    // Initial positioning off-screen before first move
    gsap.set(cursor, { x: -100, y: -100 });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Isolate state reaction to scale/border-width to independent useEffect
  useEffect(() => {
    if (!cursorRef.current) return;

    if (isHovering) {
      gsap.to(cursorRef.current, {
        scale: 2.5,
        borderWidth: "1.5px",
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(cursorRef.current, {
        scale: 1,
        borderWidth: "1px",
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [isHovering]);

  return (
    <div
      ref={cursorRef}
      // Fixed purely relative to viewport, pointer-event isolation to stop intersection blocking
      className="fixed top-0 left-0 w-6 h-6 border border-[#d97736] rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        willChange: "transform",
      }}
    />
  );
};
