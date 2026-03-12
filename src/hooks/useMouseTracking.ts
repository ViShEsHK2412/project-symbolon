import { useEffect, useRef } from "react";
import type { MutableRefObject } from "react";

export interface Coordinates {
  x: number;
  y: number;
}

export function useMouseTracking(): MutableRefObject<Coordinates> {
  const coordsRef = useRef<Coordinates>({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = 1.0 - e.clientY / window.innerHeight;
      coordsRef.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return coordsRef;
}
