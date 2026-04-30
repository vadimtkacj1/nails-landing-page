'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';

const Footer = () => {
  const menuLinks = [
    { label: 'בית', href: '/' },
    { label: 'אודות', href: '/about' },
    { label: 'מוצרים', href: '/products' },
    { label: 'חדשות', href: '/news' },
  ]

  const socialIcons = [
    { src: '/images/img_group_3.svg', alt: 'פייסבוק', href: '#' },
    { src: '/images/img_group_4.svg', alt: 'טוויטר', href: '#' },
    { src: '/images/img_group_5.svg', alt: 'אינסטגרם', href: '#' },
  ]

  return (
    <footer dir="rtl" className="w-full bg-[#d8b192]">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-14 py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 w-full">

          {/* Main columns */}
          <div className="flex flex-col lg:flex-row-reverse justify-between items-stretch lg:items-start gap-8 md:gap-12 lg:gap-16 w-full text-right">

            <Reveal dir="up" delay={0} className="w-full text-right">
              <Link
                href="/"
                className="inline-block font-['Playfair_Display',Georgia,serif] text-[34px] sm:text-[40px] lg:text-[46px] italic tracking-[0.12em] text-white leading-none select-none"
              >
                Lily Studio
              </Link>
            </Reveal>

            <Reveal dir="up" delay={80} className="flex flex-col gap-4 sm:gap-5 w-full text-right">
              <h3 className="text-base sm:text-lg font-semibold leading-[25px] text-white font-[Heebo]">
                תפריט
              </h3>
              <ul className="flex flex-col gap-1.5 sm:gap-2 w-full" role="list">
                {menuLinks.map((link, i) => (
                  <li key={i} role="listitem">
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base font-normal leading-[25px] text-[#f3f3f3] font-[Heebo] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal dir="up" delay={160} className="flex flex-col gap-4 sm:gap-5 w-full lg:w-[238px] text-right">
              <h3 className="text-base sm:text-lg font-semibold leading-[25px] capitalize text-white font-[Heebo]">
                יצירת קשר
              </h3>
              <address dir="ltr" className="w-full text-sm sm:text-base font-normal leading-[25px] text-[#f3f3f3] font-[Heebo] not-italic text-right">
                evercures@contact.com<br />
                123.456.7891<br />
                8998 Rose Avenue, Los Angeles, CA 54321
              </address>
            </Reveal>

            <Reveal dir="up" delay={240} className="flex flex-col gap-6 sm:gap-7 w-full text-right">
              <h3 className="text-base sm:text-lg font-semibold leading-[25px] text-white font-[Heebo]">
                רשתות חברתיות
              </h3>
              <div className="flex gap-2 items-center justify-start w-full">
                {socialIcons.map((icon, i) => (
                  <a
                    key={i}
                    href={icon.href}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center p-2.5 sm:p-3 hover:scale-110 active:scale-95 transition-transform duration-200"
                    aria-label={icon.alt}
                  >
                    <Image src={icon.src} alt={icon.alt} width={16} height={16} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </Reveal>

          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/40" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row-reverse justify-between  gap-4 sm:gap-6 w-full text-right">
            <p className="text-sm sm:text-base font-normal leading-5 text-[#f3f3f3] font-[Heebo] text-right">
              כל הזכויות שמורות
            </p>
            <div className="flex flex-col sm:flex-row-reverse  gap-4 sm:gap-12">
              <span className="text-sm sm:text-base font-normal leading-5 text-[#f3f3f3] font-[Heebo]">
                תנאי שימוש
              </span>
              <Link
                href="/privacy-policy"
                className="text-sm sm:text-base font-normal leading-5 text-[#f3f3f3] font-[Heebo] hover:text-white transition-colors duration-200"
              >
                מדיניות פרטיות
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
