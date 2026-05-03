'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type SplitWordsProps = {
  className?: string;
  children: ReactNode;
};

function textFromChildren(children: ReactNode): string {
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map((c) => textFromChildren(c)).join('');
  }
  return '';
}

export default function SplitWords({ className = '', children }: SplitWordsProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const text = textFromChildren(children);
  const rawParts = text.split(/(\s+)/);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      el.querySelectorAll<HTMLElement>('.word-inner').forEach((span) => {
        span.classList.add('word-visible');
      });
      return;
    }

    const wordIo = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.querySelectorAll<HTMLElement>('.word-inner').forEach((span, i) => {
            span.style.transitionDelay = `${i * 65}ms`;
            span.classList.add('word-visible');
          });
          wordIo.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    wordIo.observe(el);
    return () => wordIo.disconnect();
  }, [text]);

  return (
    <h2 ref={ref} className={className}>
      {rawParts.map((part, i) => {
        if (/^\s+$/.test(part)) {
          return part;
        }
        return (
          <span key={i} className="word-wrap">
            <span className="word-inner">{part}</span>
          </span>
        );
      })}
    </h2>
  );
}
