import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  numericValue?: number;
}

const StatCounter = ({ value, label, prefix = "", suffix = "" }: StatCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    // Try to parse numeric for animation
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }

    let start = 0;
    const duration = 1500;
    const startTime = Date.now();
    const isDecimal = value.includes(".");

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (num - start) * eased;

      if (isDecimal) {
        setDisplay(current.toFixed(1));
      } else {
        setDisplay(Math.round(current).toString());
      }

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-5xl md:text-6xl font-bold text-foreground mb-2">
        {prefix}{display}{suffix}
      </div>
      <div className="text-foreground/80 text-sm font-medium">{label}</div>
      <div className="w-12 h-0.5 bg-secondary mx-auto mt-3" />
    </div>
  );
};

export default StatCounter;
