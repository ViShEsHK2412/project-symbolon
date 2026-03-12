import React, { useEffect } from "react";
import "./footer-sequence.css";
import { setupScrambleEffect2 } from "../utils/scrambleText";

export const FooterTwo: React.FC = () => {
  useEffect(() => {
    // Reveal Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".footer-reveal-up").forEach((el) => {
      observer.observe(el);
    });

    // Scrambler Initialization
    setupScrambleEffect2();

    // Live Time
    const timeEl = document.getElementById("live-time-2");
    let timeInterval: ReturnType<typeof setInterval>;
    if (timeEl) {
      timeInterval = setInterval(() => {
        const d = new Date();
        timeEl.innerText = `${String(d.getHours()).padStart(2, "0")}:${String(
          d.getMinutes(),
        ).padStart(2, "0")}:${String(d.getSeconds()).padStart(
          2,
          "0",
        )}:${String(Math.floor(d.getMilliseconds() / 10)).padStart(2, "0")}`;
      }, 47);
    }

    // Target Coords
    const targetEl = document.getElementById("dynamic-target-2");
    let targetInterval: ReturnType<typeof setInterval>;
    if (targetEl) {
      targetInterval = setInterval(() => {
        const r1 = (Math.random() * 0.999).toFixed(3);
        const r2 = (Math.random() * 0.999).toFixed(3);
        targetEl.innerText = `${r1}, ${r2}`;
      }, 3000);
    }

    // Line Path
    const line = document.querySelector(".live-line-2") as SVGPathElement;
    let offsetInterval: ReturnType<typeof setInterval>;
    if (line) {
      let offset = 0;
      offsetInterval = setInterval(() => {
        offset -= 1;
        line.style.strokeDasharray = `4 8`;
        line.style.strokeDashoffset = offset.toString();
      }, 50);
    }

    return () => {
      observer.disconnect();
      if (timeInterval) clearInterval(timeInterval);
      if (targetInterval) clearInterval(targetInterval);
      if (offsetInterval) clearInterval(offsetInterval);
    };
  }, []);

  return (
    <div className="font-mono text-[#e0e0e0] bg-black w-full min-h-screen flex flex-col justify-end">
      <div className="flex-grow flex items-center justify-center border-b border-[#1a1a1a] p-8 text-[#333] text-sm tracking-widest uppercase">
        <p>[ SCROLL TO ACCESS TERMINAL // FOOTER BELOW ]</p>
      </div>

      <footer
        id="symbolon-footer-2"
        className="relative bg-black w-full overflow-hidden border-t border-[#1a1a1a]"
      >
        <div className="footer-noise-overlay"></div>

        <div className="w-full relative py-16 md:py-24 lg:py-32 flex justify-center items-center overflow-hidden border-b border-[#1a1a1a] footer-scanlines-2">
          <h1 className="footer-reveal-up font-serif text-[clamp(4rem,14vw,20rem)] leading-none tracking-[0.15em] ml-[0.15em] uppercase select-none relative z-20 flex justify-center group overflow-hidden">
            <span
              className="inline-block relative transition-all duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)] origin-center
              text-transparent bg-clip-text
              bg-gradient-to-r from-[#d97736] via-[#d97736] to-[#e0e0e0]
              bg-[length:200%_100%] bg-[position:100%_0]
              group-hover:bg-[position:0_0] group-hover:[text-shadow:0_0_60px_rgba(217,119,54,0.6),0_0_20px_rgba(217,119,54,0.4)]
              [text-shadow:0_0_0px_transparent]"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Symbolon
            </span>
          </h1>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#1a1a1a] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#1a1a1a] border-b border-[#1a1a1a]">
          <div
            className="bg-black p-8 lg:p-12 footer-reveal-up"
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="text-xs text-[#666] tracking-[0.3em] uppercase mb-8 flex justify-between">
              <span>IDX. ARCHIVE</span>
              <span>[01]</span>
            </h3>
            <ul className="text-sm tracking-[0.15em] uppercase space-y-4">
              <li>
                <a
                  href="#methodology"
                  className="footer-scramble-link block cursor-pointer"
                >
                  METHODOLOGY
                </a>
              </li>
              <li>
                <a
                  href="#transmit"
                  className="footer-scramble-link block cursor-pointer"
                >
                  TRANSMIT
                </a>
              </li>
              <li>
                <a
                  href="#archive"
                  className="footer-scramble-link block cursor-pointer"
                >
                  ARCHIVE
                </a>
              </li>
              <li>
                <a
                  href="#framework"
                  className="footer-scramble-link block cursor-pointer"
                >
                  FRAMEWORK
                </a>
              </li>
              <li>
                <a
                  href="#peircean"
                  className="footer-scramble-link block cursor-pointer"
                >
                  PEIRCEAN TRIAD
                </a>
              </li>
            </ul>
          </div>

          <div
            className="bg-black p-8 lg:p-12 footer-reveal-up"
            style={{ transitionDelay: "250ms" }}
          >
            <h3 className="text-xs text-[#666] tracking-[0.3em] uppercase mb-8 flex justify-between">
              <span>SYSTEMS</span>
              <span>[02]</span>
            </h3>
            <ul className="text-sm tracking-[0.15em] uppercase space-y-4">
              <li>
                <a
                  href="#obscuration"
                  className="footer-scramble-link block cursor-pointer"
                >
                  OBSCURATION
                </a>
              </li>
              <li>
                <a
                  href="#revelation"
                  className="footer-scramble-link block cursor-pointer"
                >
                  REVELATION
                </a>
              </li>
              <li>
                <a
                  href="#interaction"
                  className="footer-scramble-link block cursor-pointer"
                >
                  INTERACTION
                </a>
              </li>
              <li>
                <a
                  href="#signal"
                  className="footer-scramble-link block cursor-pointer"
                >
                  SIGNAL
                </a>
              </li>
              <li>
                <a
                  href="#protocol"
                  className="footer-scramble-link block cursor-pointer"
                >
                  PROTOCOL
                </a>
              </li>
            </ul>
          </div>

          <div
            className="bg-black p-8 lg:p-12 footer-reveal-up"
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="text-xs text-[#666] tracking-[0.3em] uppercase mb-8 flex justify-between">
              <span>TRANSMIT</span>
              <span>[03]</span>
            </h3>
            <ul className="text-sm tracking-[0.15em] uppercase space-y-4">
              <li>
                <a
                  href="#contact"
                  className="footer-scramble-link block cursor-pointer"
                >
                  INITIATE CONTACT
                </a>
              </li>
              <li className="pt-4 border-t border-[#1a1a1a] text-[#555] text-xs">
                COORD: <span className="text-[#e0e0e0]">45.42 // -75.69</span>
              </li>
              <li className="text-[#555] text-xs">
                CIPHER KEY:{" "}
                <span className="text-[#e0e0e0] scramble-onload-2">
                  A7X-99B
                </span>
              </li>
              <li className="text-[#555] text-xs">
                MSG:{" "}
                <span className="text-[#e0e0e0] scramble-onload-2">
                  ENCRYPTED_STREAM
                </span>
              </li>
            </ul>
          </div>

          <div
            className="bg-black p-8 lg:p-12 footer-reveal-up flex flex-col justify-between"
            style={{ transitionDelay: "550ms" }}
          >
            <div>
              <h3 className="text-xs text-[#666] tracking-[0.3em] uppercase mb-8 flex justify-between">
                <span>STATUS FEED</span>
                <span>[04]</span>
              </h3>
              <div className="text-xs tracking-widest text-[#888] space-y-2">
                <div className="flex justify-between border-b border-[#1a1a1a] pb-2">
                  <span>V.CORE</span>
                  <span className="text-[#e0e0e0]">3.1.04</span>
                </div>
                <div className="flex justify-between border-b border-[#1a1a1a] py-2">
                  <span>NODE</span>
                  <span className="text-[#e0e0e0] scramble-onload-2">
                    SEC-PRIMARY
                  </span>
                </div>
                <div className="flex justify-between pt-2">
                  <span>SYNC</span>
                  <span id="live-time-2" className="text-[#d97736]">
                    00:00:00:00
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <svg viewBox="0 0 100 20" className="w-full h-8 opacity-50">
                <path
                  d="M0,10 L10,10 L15,2 L20,18 L25,10 L100,10"
                  fill="none"
                  stroke="#d97736"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                  className="live-line-2"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div
          className="w-full bg-black py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs tracking-[0.2em] text-[#888] uppercase z-20 relative footer-reveal-up"
          style={{ transitionDelay: "700ms" }}
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0 w-full md:w-auto overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-[#d97736]">SYS: ACTIVE</span>
            <span className="opacity-30">//</span>
            <span className="hidden sm:inline">LAT: 45.42 // LONG: -75.69</span>
            <span className="opacity-30 hidden sm:inline">//</span>
            <span className="hidden md:inline">ENCRYPTION: SECURE</span>
            <span className="opacity-30 hidden md:inline">//</span>
            <span>
              TRGT: <span id="dynamic-target-2">0.197, 0.932</span>
            </span>
            <span className="text-[#d97736] footer-blink-2 ml-2 text-sm leading-none">
              █
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span>© {new Date().getFullYear()}</span>
            <span className="text-[#e0e0e0]">SYMBOLON IDENTITY ARCH.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
