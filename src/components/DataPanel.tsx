import React, { memo } from "react";

export const DataPanel = memo(function DataPanel() {
  const handleScroll = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>, target: string) => {
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
    },
    [],
  );

  return (
    <aside className="data-panel" aria-label="System Data Panel">
      <div>
        <div className="data-block">
          <div className="data-label">System Status</div>
          <div className="data-value">
            OBSCURATION: ACTIVE
            <br />
            REVELATION: PENDING INTERACTION
            <br />
            FRAMEWORK: PEIRCEAN TRIAD
          </div>
        </div>

        <div className="data-block">
          <div className="data-label">Methodology</div>
          <div className="data-value" style={{ marginBottom: "16px" }}>
            A brand is not a logo; it is a sign functioning within an
            interpretive structure. We architect meaning by controlling the
            threshold between the known and the obscured.
          </div>

          <div className="semiotic-grid" role="list">
            <div
              className="semiotic-item"
              role="listitem"
              tabIndex={0}
              onClick={(e) => handleScroll(e, "#methodology-icon")}
            >
              <div className="st-title">Icon</div>
              <div className="st-desc">
                The signifier that physically resembles the signified. Form,
                topology, visual mimicry.
              </div>
            </div>
            <div
              className="semiotic-item"
              role="listitem"
              tabIndex={0}
              onClick={(e) => handleScroll(e, "#methodology-index")}
            >
              <div className="st-title">Index</div>
              <div className="st-desc">
                The signifier inherently connected to the signified. Evidence,
                trace, implication of action.
              </div>
            </div>
            <div
              className="semiotic-item"
              role="listitem"
              tabIndex={0}
              onClick={(e) => handleScroll(e, "#methodology-symbol")}
            >
              <div className="st-title">Symbol</div>
              <div className="st-desc">
                The signifier related to the signified by convention alone.
                Cultivated meaning, learned association.
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
});
