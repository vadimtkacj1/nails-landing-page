'use client';
import { useEffect } from 'react';

export default function ScrollRevealProvider() {
  useEffect(() => {
    const easing = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── Section-level reveal ── */
    const sectionIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-is-visible');
            sectionIo.unobserve(e.target);
          }
        });
      },
      { threshold: 0.04, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('main > section, footer').forEach((el) => sectionIo.observe(el));

    /* ── Element-level reveal ── */
    const elemIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('reveal-visible');
            elemIo.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -20px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => elemIo.observe(el));

    /* ── Stagger children ── */
    document.querySelectorAll('[data-stagger]').forEach((parent) => {
      const step = Number((parent as HTMLElement).dataset.stagger) || 80;
      parent.querySelectorAll(':scope > *').forEach((child, i) => {
        (child as HTMLElement).style.transition =
          `opacity 0.72s ${easing} ${i * step}ms, transform 0.72s ${easing} ${i * step}ms`;
      });
    });

    if (reduced) {
      return () => { sectionIo.disconnect(); elemIo.disconnect(); };
    }

    /* ── Curtain image reveal ──
       Elements with `.curtain` get an overlay div appended.
       The overlay sweeps left→right, hiding then revealing the image.
    ── */
    document.querySelectorAll<HTMLElement>('.curtain').forEach((el) => {
      const overlay = document.createElement('div');
      overlay.className = 'curtain-overlay';
      el.appendChild(overlay);
    });

    const curtainIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('curtain-visible');
            curtainIo.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    document.querySelectorAll('.curtain').forEach((el) => curtainIo.observe(el));

    /* ── Parallax ── desktop only
       No benefit on touch devices and wastes battery/causes jank.
       CSS also zeros out the transform on mobile as a safety net.
    ── */
    if (window.matchMedia('(max-width: 1023px)').matches) {
      return () => { sectionIo.disconnect(); elemIo.disconnect(); curtainIo.disconnect(); };
    }

    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax]')
    );

    let rafId: number | null = null;

    const updateParallax = () => {
      const winH = window.innerHeight;
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax ?? '0');
        const rect  = el.getBoundingClientRect();
        if (rect.bottom < -winH * 0.5 || rect.top > winH * 1.5) return;
        const distFromCenter = rect.top + rect.height * 0.5 - winH * 0.5;
        el.style.setProperty('--px-y', `${(distFromCenter * speed).toFixed(2)}px`);
      });
      rafId = null;
    };

    const onScroll = () => {
      if (rafId === null) rafId = window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax();

    return () => {
      sectionIo.disconnect();
      elemIo.disconnect();
      curtainIo.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
