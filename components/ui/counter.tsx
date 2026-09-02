"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import * as React from "react";

/**
 * Counts up to `value` once the element scrolls into view.
 * Respects prefers-reduced-motion by rendering the final value immediately.
 */
export function Counter({
  value,
  suffix = "",
  duration = 1.8,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    // With reduced motion the final value is rendered directly, so there is
    // nothing to animate.
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduce]);

  const shown = reduce ? value : display;

  return (
    <span ref={ref} className={className}>
      {/* Final value is present in the DOM for assistive tech and no-JS crawlers */}
      <span aria-hidden>{shown}</span>
      <span className="sr-only">{value}</span>
      {suffix}
    </span>
  );
}
