import React from "react";

export const Spine = React.memo(function Spine() {
  const handleScrollTop = () => {
    const lenis = window.lenisInstance;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <aside className="spine">
      <div className="spine-top">
        <div
          className="mark"
          aria-label="Symbolon Interface"
          role="button"
          tabIndex={0}
          onClick={handleScrollTop}
          onKeyDown={(e) => e.key === "Enter" && handleScrollTop()}
        >
          S
        </div>
        <div className="spine-year" aria-label="Year 2024">
          2024
        </div>
        <div className="spine-divider" aria-hidden="true"></div>
      </div>
      <div className="spine-brand">Symbolon Identity Arch.</div>
    </aside>
  );
});
