'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import SplitWords from '@/components/ui/SplitWords';

export default function ContactSection() {
  const [email, setEmail] = useState<string>('')

  const handleSubscribe = (): void => {
    if (!email.trim()) return
    console.log('Subscribe email:', email)
    setEmail('')
  }

  return (
    <section className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24">

          {/* Left — Rounded image with curtain reveal + parallax pan */}
          <div className="w-full lg:w-[48%] flex-shrink-0">
            <div className="parallax-card curtain rounded-[40px] sm:rounded-[56px]">
              <div data-parallax="0.10">
                <Image
                  src="/images/img_hands_girl_with.png"
                  alt="Nail care"
                  width={652}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right — Contact info */}
          <Reveal dir="left" delay={120} className="w-full lg:w-[52%] flex flex-col items-center lg:items-start gap-6 lg:gap-8">
            <SplitWords className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold leading-tight uppercase text-[#d8b192] font-[Heebo] text-center lg:text-right">
              צור קשר עם הסלון שלנו
            </SplitWords>

            <div className="flex flex-col items-center lg:items-start gap-2">
              <p className="text-[14px] lg:text-[16px] font-normal text-[#757575] font-[Heebo] text-center lg:text-right">
                התקשרו אלינו כדי לתאם טיפול
              </p>
              <a
                href="tel:+11236755656"
                className="text-[20px] lg:text-[24px] font-semibold text-[#3b3b3b] font-[Heebo] hover:text-[#d8b192] transition-colors duration-300"
              >
                (123) 675 5656
              </a>
            </div>

            <div className="w-full max-w-[500px]">
              <div className="flex items-center border-b border-[#757575] pb-3">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                  placeholder="הזן כתובת אימייל"
                  className="flex-1 bg-transparent text-[14px] lg:text-[16px] font-normal text-[#3b3b3b] font-[Heebo] placeholder:text-[#9e9e9e] outline-none"
                />
                <button
                  type="button"
                  onClick={handleSubscribe}
                  className="ml-6 flex-shrink-0 text-[12px] lg:text-[13px] font-semibold uppercase tracking-widest text-[#d8b192] font-[Heebo] hover:opacity-70 transition-opacity duration-200"
                >
                  הרשמה
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-0 w-[200px] lg:w-[300px] xl:w-[360px] pointer-events-none deco-float-c">
        <Image src="/images/img_06_3.png" alt="" width={326} height={612} className="w-full h-auto" />
      </div>
    </section>
  )
}
