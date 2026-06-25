import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** valor final a alcanzar (ej. 15, 5, 8) */
  value: number;
  /** prefijo literal (ej. "+") */
  prefix?: string;
  /** sufijo literal (ej. "k") */
  suffix?: string;
  /** cantidad de decimales (ej. 1 para "5.0") */
  decimals?: number;
  /** duración del conteo en ms */
  duration?: number;
  className?: string;
}

/* ease-out cúbico: arranca rápido y desacelera al final */
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Cuenta desde 0 hasta `value` cuando el elemento entra en viewport (una sola vez),
 * usando IntersectionObserver + requestAnimationFrame. Sin librerías externas.
 * Respeta el formato vía prefix/suffix/decimals y prefers-reduced-motion.
 */
export function CountUp({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1200,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // reduced-motion: mostrar el valor final sin animar
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let triggered = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered) {
          triggered = true;
          io.disconnect(); // una sola vez
          let startTs = 0;
          const step = (ts: number) => {
            if (!startTs) startTs = ts;
            const p = Math.min((ts - startTs) / duration, 1);
            setDisplay(value * easeOutCubic(p));
            if (p < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 } // dispara cuando ~30% es visible
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
