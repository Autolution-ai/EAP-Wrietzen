'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Branchenspezifische Animation (Elektro): eine Leiterbahn zeichnet sich beim
// Scrollen, Knotenpunkte leuchten auf. GSAP ScrollTrigger nach Master-Workflow.
gsap.registerPlugin(ScrollTrigger, useGSAP);

export function CircuitTrace({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const path = containerRef.current?.querySelector<SVGPathElement>('.trace-path');
      const nodes = gsap.utils.toArray<SVGCircleElement>('.trace-node');
      if (!path) return;

      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.set(nodes, { scale: 0, transformOrigin: 'center' });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          end: 'bottom 60%',
          scrub: 1, // Zahl, nicht true (smooth lag)
        },
      });

      gsap.to(nodes, {
        scale: 1,
        stagger: 0.2,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 65%',
          scrub: 1,
        },
      });

      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={className} aria-hidden>
      <svg viewBox="0 0 1200 120" fill="none" className="h-full w-full">
        <path
          className="trace-path"
          d="M0 60 H220 L260 20 H440 L480 60 H700 L740 100 H940 L980 60 H1200"
          stroke="#FACC15"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[220, 440, 700, 940].map((cx, i) => (
          <circle
            key={cx}
            className="trace-node"
            cx={cx}
            cy={i % 2 === 0 ? (i === 0 ? 60 : 60) : 60}
            r="6"
            fill="#FACC15"
          />
        ))}
      </svg>
    </div>
  );
}
