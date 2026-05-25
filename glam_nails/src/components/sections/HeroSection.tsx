'use client';

import Button from '@/components/ui/Button';
import { useParallax } from '@/hooks/useParallax';
import { useLocale } from '@/components/i18n/LocaleProvider';
import { useBooking } from '@/components/booking/BookingContext';

export default function HeroSection() {
  const { ref: bgRef, offset } = useParallax<HTMLDivElement>(0.18);
  const { content, dir } = useLocale();
  const hero = content.hero;
  const isRtl = dir === 'rtl';
  const { openBooking } = useBooking();

  const scrimDirection = isRtl ? 'to left' : 'to right';
  const imagePath = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/img_.png`;

  return (
    <section id="hero" className="relative w-full bg-secondary-light overflow-hidden">
      
      {/* Десктопний фон (Паралакс) — прихований на мобільних */}
      <div
        ref={bgRef}
        aria-hidden
        className="hidden md:block absolute -inset-y-[12%] inset-x-0 will-change-transform"
        style={{
          backgroundImage: `url('${imagePath}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translate3d(0, ${offset}px, 0)${isRtl ? ' scaleX(-1)' : ''}`,
        }}
      />

      {/* Десктопна маска для читабельності тексту */}
      <div
        aria-hidden
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(${scrimDirection}, #f8efe8 0%, rgba(248,239,232,0.85) 30%, rgba(248,239,232,0.35) 60%, rgba(248,239,232,0) 85%)`,
        }}
      />

      {/* Основний контейнер */}
      <div className="relative w-full max-w-[1440px] mx-auto">
        {/* flex-col-reverse міняє місцями блоки на мобільці: спочатку картинка, потім текст */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-0 pb-12 md:py-[174px] md:px-10">
          
          {/* Текстовий блок (тепер знизу на мобільних) */}
          <div className="flex flex-col gap-[16px] w-full max-w-[520px] px-5 sm:px-6 md:px-0 mt-8 md:mt-0 z-10 text-center md:text-start items-center md:items-start">
            <h1 
              className="text-[28px] sm:text-[36px] md:text-[48px] font-medium leading-[36px] sm:leading-[48px] md:leading-[63px] text-text-primary" 
              style={{ fontFamily: 'Playfair Display' }}
            >
              {hero.title}
            </h1>

            <div className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[40px] w-full items-center md:items-start">
              <p 
                className="text-[15px] sm:text-[16px] md:text-base font-normal leading-relaxed text-text-secondary max-w-[420px] md:max-w-none" 
                style={{ fontFamily: 'Nunito Sans' }}
              >
                {hero.subtitle}
              </p>

              {/* Кнопки з рамкою для другої кнопки */}
              <div className="flex flex-col sm:flex-row gap-[12px] w-full max-w-[320px] sm:max-w-none justify-center md:justify-start">
                <Button
                  text={hero.cta}
                  className="w-full sm:w-auto px-[28px] py-[14px] uppercase tracking-wider text-sm"
                  text_font_size="text-sm"
                  text_font_family="Nunito Sans"
                  text_font_weight="font-medium"
                  text_line_height="leading-relaxed"
                  text_color="text-text-white"
                  fill_background_color="bg-primary-background"
                  variant="primary"
                  size="medium"
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing')
                    pricingSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                />
                <button
                  onClick={openBooking}
                  className="w-full sm:w-auto px-[28px] py-[14px] uppercase tracking-wider text-sm font-medium bg-transparent text-text-primary hover:bg-text-primary hover:text-white transition-all duration-200 focus:outline-none"
                  style={{ fontFamily: 'Nunito Sans', border: '2px solid #1d1d1e' }}
                >
                  {hero.cta2}
                </button>
              </div>
            </div>
          </div>

          {/* Мобільне зображення (тепер зверху на мобільних завдяки flex-col-reverse) */}
          <div className="block md:hidden w-full overflow-hidden rounded-b-[32px] shadow-sm">
            <img 
              src={imagePath} 
              alt="Nails and Beauty" 
              className={`w-full h-auto object-cover ${isRtl ? 'scaleX(-1)' : ''}`}
            />
          </div>

        </div>
      </div>
    </section>
  )
}