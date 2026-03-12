import { useEffect, useRef } from "react";
import gsap from "gsap";

export function MethodologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      },
    );

    textRefs.current.forEach((text, i) => {
      if (!text) return;
      gsap.fromTo(
        text,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
          },
        },
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="methodology-section"
      aria-labelledby="methodology-title"
    >
      <div className="methodology-content">
        <h2 id="methodology-title" ref={titleRef} className="methodology-title">
          Peircean Triad
        </h2>
        <div className="methodology-text-block">
          <p
            id="methodology-icon"
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className="methodology-paragraph"
          >
            The signifier that physically resembles the signified. Form,
            topology, visual mimicry. Icons establish the most direct connection
            to perception.
          </p>
          <p
            id="methodology-index"
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className="methodology-paragraph"
          >
            The signifier inherently connected to the signified. Evidence,
            trace, implication of action. Indices point towards reality without
            explicitly reconstructing it.
          </p>
          <p
            id="methodology-symbol"
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className="methodology-paragraph"
          >
            The signifier related to the signified by convention alone.
            Cultivated meaning, learned association. Symbols require a leap of
            interpretive faith.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MethodologySection;
