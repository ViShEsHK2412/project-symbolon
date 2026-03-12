import React, { memo } from "react";

export interface TopMetaProps {
  coordsRef: React.RefObject<HTMLDivElement | null>;
}

export const TopMeta = memo(function TopMeta({ coordsRef }: TopMetaProps) {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    e.preventDefault();
    const lenis = window.lenisInstance;
    if (target === "top") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      const el = document.querySelector(target) as HTMLElement;
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { duration: 1.5 });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className="top-meta">
      <nav className="meta-nav" aria-label="Main Navigation">
        <a
          href="#archive"
          className="nav-link"
          onClick={(e) => handleScroll(e, "top")}
        >
          Idx. Archive
        </a>
        <a
          href="#methodology"
          className="nav-link"
          onClick={(e) => handleScroll(e, "#main-content")}
        >
          Methodology
        </a>
        <a
          href="#transmit"
          className="nav-link"
          onClick={(e) => handleScroll(e, "#footer")}
        >
          Transmit
        </a>
      </nav>
      <div
        className="meta-coords"
        id="coords"
        ref={coordsRef}
        aria-live="polite"
      >
        TRGT: 0.000, 0.000
      </div>
    </div>
  );
});
