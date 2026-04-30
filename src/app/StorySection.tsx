'use client';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const SPARKLE_STYLE =
  'pointer-events-none absolute rounded-full bg-[#C9A68A]/90 shadow-[0_0_6px_rgba(201,166,138,0.45)]';

function StorySparkles() {
  const dots: { className: string }[] = [
    { className: 'left-[62%] top-[8%] h-1.5 w-1.5' },
    { className: 'left-[58%] top-[22%] h-1 w-1' },
    { className: 'left-[72%] top-[18%] h-2 w-2 opacity-80' },
    { className: 'left-[68%] top-[38%] h-1 w-1' },
    { className: 'left-[78%] top-[32%] h-1.5 w-1.5' },
    { className: 'left-[52%] top-[48%] h-1 w-1 opacity-70' },
    { className: 'left-[8%] bottom-[6%] h-1.5 w-1.5' },
    { className: 'left-[18%] bottom-[14%] h-1 w-1' },
    { className: 'left-[4%] bottom-[22%] h-1 w-1 opacity-60' },
  ];
  return (
    <>
      {dots.map((d, i) => (
        <span key={i} className={`${SPARKLE_STYLE} ${d.className}`} aria-hidden />
      ))}
    </>
  );
}

function StoryLineArt() {
  return (
    <svg
      className="pointer-events-none absolute -left-2 bottom-[2%] z-0 h-[clamp(5rem,18vw,9rem)] w-[clamp(6rem,22vw,11rem)] text-[#C9A68A]/55"
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 88C22 72 18 48 32 36C46 24 58 28 72 20C86 12 98 8 112 14"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M14 92C28 78 40 58 54 50C68 42 82 46 96 38"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

export default function StorySection() {
  return (
    <section className="w-full overflow-hidden bg-[#FFF9F0] py-14 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          {/* Left — collage */}
          <div className="relative w-full lg:w-[52%] lg:max-w-none">
            <StoryLineArt />
            <StorySparkles />

            <div className="relative z-[1] mx-auto w-full max-w-[min(100%,520px)] pb-[clamp(3.5rem,18%,7rem)] lg:mx-0">
              <div className="relative aspect-square w-full overflow-hidden bg-[#f0ebe3] shadow-[0_24px_48px_rgba(0,0,0,0.06)]">
                <Image
                  src="/images/img_image_27.png"
                  alt="Hands with eucalyptus leaves"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                  priority
                />
              </div>

              {/* Arch overlaps bottom-right of main square */}
              <div
                className="absolute bottom-0 right-[2%] z-[2] w-[42%] max-w-[220px] overflow-hidden rounded-t-[999px] bg-[#faf6f2] shadow-[12px_18px_36px_rgba(0,0,0,0.18)] sm:right-[4%] sm:w-[40%] sm:max-w-[240px] lg:max-w-[260px]"
                style={{ aspectRatio: '372 / 438' }}
              >
                <Image
                  src="/images/nails9.webp"
                  alt="Hand with ring manicure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 40vw, 260px"
                />
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div dir="rtl" className="flex w-full flex-col gap-5 text-right lg:w-[48%] lg:max-w-xl lg:gap-6">
            <h2 className="font-['Playfair_Display',Georgia,serif] text-[clamp(1.75rem,4vw,2.5rem)] font-normal uppercase tracking-[0.12em] text-[#C9A68A]">
              הסיפור שלנו
            </h2>
            <div className="flex max-w-xl flex-col gap-4 text-[15px] leading-[1.75] text-[#6e6862] lg:text-[16px]">
              <p className="font-[Heebo] font-normal">
                יצרנו את Lily Nails כדי שכל אורח ירגיש מרחב שקט ואלגנטי שבו יופי והיגיינה נמצאים בראש סדר העדיפויות.
                כל ביקור מתוכנן להיות נעים, אישי וממש פרימיום.
              </p>
              <div className="space-y-1.5">
                <p className="font-[Heebo] font-semibold text-[#5c5752]">תמיד נקי</p>
                <p className="font-[Heebo] font-normal">
                  כל הכלים עוברים סטריליזציה מלאה, העמדות מחוטאות אחרי כל לקוחה, ואנחנו משתמשים רק במוצרים מקצועיים ואמינים.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-[Heebo] font-semibold text-[#5c5752]">מובילים באחריות ובאתיקה</p>
                <p className="font-[Heebo] font-normal">
                  הצוות שלנו משלב טכניקות מודרניות, סטנדרטים אתיים וטרנדים כדי לשמור על ציפורניים בריאות, מסוגננות ועמידות לאורך זמן.
                </p>
              </div>
            </div>
            <Button
              text="גלה עוד"
              text_font_size="13"
              text_font_family="Heebo"
              text_font_weight="600"
              text_color="#ffffff"
              fill_background_color="#C9A68A"
              border_border_radius="9999px"
              className="mt-1 w-fit px-10 py-3 tracking-[0.2em]"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
