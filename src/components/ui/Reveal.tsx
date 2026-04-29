'use client';
import { useEffect, useRef, ReactNode } from 'react';

type Dir = 'up' | 'left' | 'right' | 'scale' | 'fade';

interface RevealProps {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  threshold?: number;
  className?: string;
}

export function Reveal({
  children,
  dir = 'up',
  delay = 0,
  threshold = 0.1,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
          io.disconnect();
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`reveal reveal-${dir} ${className}`}>
      {children}
    </div>
  );
}
