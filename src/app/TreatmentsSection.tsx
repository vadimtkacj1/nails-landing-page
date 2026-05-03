'use client';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import SplitWords from '@/components/ui/SplitWords';

const treatments = [
  { name: 'מניקור', description: 'טיפוח עדין לציפורניים מטופחות וידיים רכות', price: '₪36.00' },
  { name: 'קרם לידיים/ציפורניים', description: 'הזנה מהירה וספיגה נעימה לעור בריא', price: '₪100.00' },
  { name: 'קוצץ ציפורניים', description: 'קיצוץ מדויק לשמירה על אורך מושלם', price: '₪40.00' },
  { name: 'מניקור ופדיקור', description: 'פינוק מלא מהשורש ועד הקצה', price: '₪60.00' },
];

export default function TreatmentsSection() {
  return (
    <section className="w-full relative py-16 sm:py-24 lg:py-32 bg-[#faf6f0] overflow-hidden">
      
      {/* Decorative gold dots — floating + parallax */}
      <div className="absolute bottom-[-20px] left-[40%] w-[300px] lg:w-[450px] pointer-events-none z-0 deco-float-b">
        <div data-parallax="0.18">
          <Image
            src="/images/img_03_2.png"
            alt=""
            width={500}
            height={400}
            className="w-full h-auto opacity-70"
          />
        </div>
      </div>

      <div dir="rtl" className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          
          {/* Левая часть: Список услуг */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4 text-right">
            <SplitWords className="text-[28px] sm:text-[36px] lg:text-[42px] font-medium tracking-wide text-[#c9a385] font-[Heebo] mb-10">
              טיפולים ומחירים
            </SplitWords>

            <div className="flex flex-col gap-8 mb-12">
              {treatments.map((t, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[16px] lg:text-[18px] font-semibold text-[#555] font-[Heebo]">
                      {t.name}
                    </span>
                    <span className="text-[16px] lg:text-[18px] font-medium text-[#555] font-[Heebo] tabular-nums">
                      {t.price}
                    </span>
                  </div>
                  <p className="text-[14px] leading-relaxed text-[#999] font-[Heebo]">
                    {t.description}
                  </p>
                </div>
              ))}
            </div>

            <Button
              text="גלו עוד"
              text_font_size="14"
              text_color="#ffffff"
              fill_background_color="#d8b192"
              border_border_radius="9999px"
              className="w-fit px-12 py-4 tracking-widest hover:bg-[#c9a385] transition-colors"
              onClick={() => {}}
            />
          </div>

          {/* Right — photo with parallax (no curtain / no extra strip under image) */}
          <div className="w-full lg:w-1/2 relative flex justify-end">
            <div className="parallax-card relative z-10 w-full max-w-[600px] overflow-hidden shadow-2xl shadow-black/5 bg-[#faf6f0]">
              <div
                data-parallax="0.12"
                className="relative w-full aspect-[766/850]"
              >
                <Image
                  src="/images/img_image_29.png"
                  alt="טיפול ציפורניים"
                  fill
                  className="object-cover object-[center_35%]"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}