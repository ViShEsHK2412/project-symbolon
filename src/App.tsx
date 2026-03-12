import React, { Suspense, useRef } from "react";
import { useMouseTracking } from "./hooks/useMouseTracking";
import { useWebGLAnimation } from "./hooks/useWebGLAnimation";

// Components
import { Spine } from "./components/Spine";
import { TopMeta } from "./components/TopMeta";
import { TitleGroup } from "./components/TitleGroup";
import { DataPanel } from "./components/DataPanel";
import { SmoothScroll } from "./components/SmoothScroll";
import Preloader from "./components/Preloader";
import { SystemCrosshair } from "./components/SystemCrosshair";
import { ErrorBoundary } from "react-error-boundary";

const MethodologySection = React.lazy(
  () => import("./components/MethodologySection"),
);
const FooterSequence = React.lazy(() => import("./components/FooterSequence"));

export function App() {
  const [isPreloading, setIsPreloading] = React.useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef<HTMLDivElement>(null);
  const mouseCoordsRef = useMouseTracking();

  useWebGLAnimation(containerRef, mouseCoordsRef, coordsRef);

  React.useEffect(() => {
    const lenis = window.lenisInstance;
    if (lenis) {
      if (isPreloading) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [isPreloading]);

  return (
    <>
      {!isPreloading && <SystemCrosshair />}
      <SmoothScroll />
      {isPreloading && <Preloader onComplete={() => setIsPreloading(false)} />}
      <div
        className="ui-layer"
        style={{
          opacity: isPreloading ? 0 : 1,
          transition: "opacity 1s ease-in-out",
        }}
      >
        <div
          ref={containerRef}
          id="glcanvas"
          aria-hidden="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div className="luxurious-grain-overlay" aria-hidden="true" />
        <div className="scroll-content">
          <aside className="spine-wrapper">
            <ErrorBoundary
              fallback={
                <div className="error-fallback">Error Loading Spine</div>
              }
            >
              <Spine />
            </ErrorBoundary>
          </aside>

          <ErrorBoundary
            fallback={
              <div className="error-fallback">System Fault Encountered</div>
            }
          >
            <div className="scrolling-center">
              <main className="main-stage">
                <TopMeta coordsRef={coordsRef} />
                <TitleGroup />
              </main>

              <section id="main-content">
                <Suspense fallback={<div style={{ height: "100vh" }} />}>
                  <MethodologySection />
                </Suspense>
              </section>
            </div>
          </ErrorBoundary>

          <aside className="data-panel-wrapper">
            <ErrorBoundary
              fallback={<div className="error-fallback">Data Link Dead</div>}
            >
              <DataPanel />
            </ErrorBoundary>
          </aside>

          <div className="footer-spanning-container">
            <Suspense fallback={<div style={{ height: "100vh" }} />}>
              <FooterSequence />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
