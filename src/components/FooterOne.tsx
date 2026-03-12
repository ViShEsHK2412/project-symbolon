import React from "react";
import "./footer-sequence.css";

export const FooterOne: React.FC = () => {
  return (
    <div className="relative font-mono text-brand-grey selection:bg-brand-amber selection:text-black bg-transparent w-full min-h-screen flex flex-col">
      <div className="footer-noise-bg"></div>

      <main className="flex-grow flex flex-col items-center justify-center relative min-h-[90vh] bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-0"></div>
        <div className="relative z-10 text-center px-6">
          <p className="text-xs tracking-ultra text-brand-muted uppercase mb-4">
            [ SYSTEM INITIALIZED ]
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-grey mb-8 font-light italic">
            Accessing Archives
          </h2>
          <div className="w-[1px] h-24 bg-brand-border mx-auto mb-8 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-amber rounded-full animate-ping"></div>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-brand-muted">
            Scroll down to access terminal interface
          </p>
          <p className="text-[10px] uppercase tracking-widest text-brand-muted mt-1">
            ↓
          </p>
        </div>
      </main>
    </div>
  );
};
