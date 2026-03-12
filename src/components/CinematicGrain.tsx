import React, { memo } from "react";

export const CinematicGrain: React.FC = memo(() => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999, // Rendered globally on top of the stack
        pointerEvents: "none", // Prevent capturing any DOM interactions
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          right: "-50%",
          bottom: "-50%",
          width: "200%",
          height: "200%",
          opacity: 0.02, // Extremely subtle expensive look, dialed back for crisp contrast
          mixBlendMode: "soft-light", // Preserves infinite pure black/white contrast
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          animation: "film-stutter 0.2s steps(8) infinite", // Emulates high-speed analog camera shutter
        }}
      />
    </div>
  );
});

CinematicGrain.displayName = "CinematicGrain";
