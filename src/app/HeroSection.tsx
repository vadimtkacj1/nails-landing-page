'use client';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type HeroSlide = {
  title: string;
  subtitle: string;
  sideLabel: string;
  /** Большое фото справа */
  heroImage: string;
  /** Арка по центру */
  archImage: string;
  /** Лак / продукт слева (img_layer_*.png и т.д.) */
  lacquerImage: string;
};

export default function HeroSection() {
  const slides: HeroSlide[] = [
    {
      title: 'טיפוח ציפורניים יוקרתי',
      subtitle: 'אלגנטיות בכל פרט',
      sideLabel: 'סטודיו למניקור חתימה',
      heroImage: '/images/img_sour_moha_k47vi.png',
      archImage: '/images/img_chelson_tamares.png',
      lacquerImage: '/images/img_layer_4.png',
    },
    {
      title: 'פלטת גווני נוד מושלמת',
      subtitle: 'גוונים עדינים עם גימור נקי',
      sideLabel: 'טקסי סלון פרימיום',
      heroImage: '/images/img_chelson_tamares.png',
      archImage: '/images/img_sour_moha_k47vi.png',
      lacquerImage: '/images/img_layer_3.png',
    },
    {
      title: 'אסתטיקה מודרנית לציפורניים',
      subtitle: 'לוקים טרנדיים שנוצרו עבורך',
      sideLabel: 'חוויית יופי מעודנת',
      heroImage: '/images/nails1.webp',
      archImage: '/images/nails9.webp',
      lacquerImage: '/images/img_layer_5.png',
    },
    {
      title: 'טיפוח מקצועי וסטייל',
      subtitle: 'ציפורניים בריאות עם ברק עמיד',
      sideLabel: 'בעיצוב אמניות הציפורניים שלנו',
      heroImage: '/images/nails2.webp',
      archImage: '/images/img_negin_esmaeili.png',
      lacquerImage: '/images/img_layer_6.png',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slides.length;
  const slide = slides[activeIndex];

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const id = window.setInterval(goNext, 5500);
    return () => window.clearInterval(id);
  }, [goNext]);

  return (
    <section className="w-full relative overflow-hidden bg-[#FDF5EF] lg:pt-[4.5rem] xl:pt-[5rem]">
      <div dir="ltr" className="hidden lg:flex flex-col h-[90vh] min-h-[750px] max-h-[1100px]">
        <div className="flex-1 flex relative min-h-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="absolute inset-0 flex"
            >
              {/* Левая колонка: лаки + подпись */}
              <div className="w-[45%] h-full flex flex-col justify-center items-center px-8 xl:px-14 relative z-10 bg-[#FDF5EF]">
                <p className="text-[#b08f72] text-[11px] xl:text-[12px] font-semibold font-[Heebo] uppercase tracking-[0.2em] mb-4">
                  גוונים נבחרים
                </p>
                <div className="relative mb-6 flex items-center justify-center">
                  <svg
                    className="pointer-events-none absolute w-[min(300px,24vw)] h-[min(300px,24vw)] text-[#C9A68A]/40"
                    viewBox="0 0 200 200"
                    fill="none"
                    aria-hidden
                  >
                    <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="0.55" strokeDasharray="5 12" />
                  </svg>
                  <motion.div
                    key={`lacquer-${activeIndex}`}
                    initial={{ opacity: 0, y: 16, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-[min(200px,16vw)] h-[min(240px,20vw)] xl:w-[220px] xl:h-[280px]"
                  >
                    <Image
                      src={slide.lacquerImage}
                      alt=""
                      fill
                      className="object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)]"
                      sizes="220px"
                      priority={activeIndex === 0}
                    />
                  </motion.div>
                </div>
                <p className="text-[#8B7E74] tracking-[0.12em] text-[11px] xl:text-[12px] font-medium font-[Heebo] text-center max-w-[280px] leading-relaxed">
                  {slide.sideLabel}
                </p>
              </div>

              <div className="w-[55%] h-full relative">
                <Image
                  key={`hero-${activeIndex}`}
                  src={slide.heroImage}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="55vw"
                  priority={activeIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute left-[45%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[280px] h-[392px] xl:w-[340px] xl:h-[476px] rounded-t-full overflow-hidden shadow-[0_28px_60px_rgba(0,0,0,0.22)] ring-[6px] ring-white/35"
              >
                <Image
                  key={`arch-${activeIndex}`}
                  src={slide.archImage}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(min-width:1280px) 340px, 280px"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={goPrev}
            aria-label="שקופית קודמת"
            className="absolute left-6 xl:left-10 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <Image src="/images/img_arrow.svg" alt="" width={56} height={28} className="opacity-70 hover:opacity-100 transition-opacity" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="שקופית הבאה"
            className="absolute right-6 xl:right-10 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <Image src="/images/img_arrow.svg" alt="" width={56} height={28} className="opacity-70 hover:opacity-100 transition-opacity rotate-180" />
          </button>
        </div>

        <div className="h-28 bg-[#D8B192] flex items-center px-8 xl:px-16 text-white z-40 shrink-0">
          <div className="grid grid-cols-3 w-full items-center gap-4">
            <div className="flex items-center gap-4 xl:gap-6 min-w-0">
              <div className="flex items-center gap-2 xl:gap-3 text-[12px] xl:text-[13px] font-[Heebo] tracking-wide shrink-0">
                <button type="button" onClick={goPrev} className="hover:text-black/90 transition-colors">
                  הקודם
                </button>
                <span className="opacity-50">|</span>
                <button type="button" onClick={goNext} className="hover:text-black/90 transition-colors">
                  הבא
                </button>
              </div>
              <span className="text-[13px] xl:text-[14px] font-light opacity-90 tabular-nums shrink-0">
                {String(activeIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
              </span>
            </div>

            <div className="text-center min-w-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.h1
                  key={activeIndex}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -6, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-[20px] xl:text-[26px] 2xl:text-[30px] font-semibold font-[Heebo] tracking-wide truncate px-2 leading-snug"
                >
                  {slide.title}
                </motion.h1>
              </AnimatePresence>
            </div>

            <div className="text-right min-w-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[13px] xl:text-[15px] font-light italic opacity-95 font-[Heebo] line-clamp-2"
                >
                  {slide.subtitle}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-col">
        <div className="relative w-full h-[80vw] min-h-[350px]">
          <Image
            key={`m-hero-${activeIndex}`}
            src={slide.heroImage}
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-5 right-5 flex items-center gap-3 z-30">
            <button type="button" className="text-[11px] tracking-wide text-white border border-white px-4 py-1.5 rounded-full font-[Heebo]">
              קבע תור
            </button>
            <button type="button" className="flex flex-col gap-1 w-6" aria-label="תפריט">
              <span className="block w-full h-[1px] bg-white" />
              <span className="block w-full h-[1px] bg-white" />
            </button>
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="relative w-[180px] h-[250px] rounded-t-full overflow-hidden shadow-2xl pointer-events-auto">
              <Image
                key={`m-arch-${activeIndex}`}
                src={slide.archImage}
                alt=""
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#d8b192] p-6 text-white">
          <div className="flex justify-between items-center mb-2 gap-3">
            <div className="flex items-center gap-3 text-[12px] shrink-0">
              <button type="button" onClick={goPrev}>
                ‹
              </button>
              <span className="tabular-nums">
                {activeIndex + 1} / {totalSlides}
              </span>
              <button type="button" onClick={goNext}>
                ›
              </button>
            </div>
            <span className="text-[12px] opacity-80 text-left line-clamp-2">{slide.subtitle}</span>
          </div>
          <h1 className="text-[20px] font-semibold font-[Heebo]">{slide.title}</h1>
        </div>
      </div>
    </section>
  );
}
