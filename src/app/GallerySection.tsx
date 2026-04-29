'use client';
import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';

const images = [
  { id: 1, src: '/images/nails1.webp', alt: 'עיצוב ציפורניים 1' },
  { id: 2, src: '/images/nails2.webp', alt: 'עיצוב ציפורניים 2' },
  { id: 3, src: '/images/nails3.webp', alt: 'עיצוב ציפורניים 3' },
  { id: 4, src: '/images/nails4.webp', alt: 'עיצוב ציפורניים 4' },
  { id: 5, src: '/images/nails5.webp', alt: 'עיצוב ציפורניים 5' },
  { id: 6, src: '/images/nails6.webp', alt: 'עיצוב ציפורניים 6' },
  { id: 7, src: '/images/nails7.webp', alt: 'עיצוב ציפורניים 7' },
  { id: 8, src: '/images/nails8.webp', alt: 'עיצוב ציפורניים 8' },
  { id: 9, src: '/images/nails9.webp', alt: 'עיצוב ציפורניים 9' },
  { id: 10, src: '/images/nails10.webp', alt: 'עיצוב ציפורניים 10' },
]

export default function InstagramGallerySection() {
  return (
    <section className="w-full">
      <div className="w-full relative">

        {/* 5-column grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-0">
          {images.map((img, i) => (
            <Reveal key={img.id} dir="scale" delay={i * 55} className="aspect-square relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </Reveal>
          ))}
        </div>

        {/* Follow Us card — centered overlay (desktop only) */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
          <a
            href="#"
            aria-label="עקבו אחרינו באינסטגרם"
            className="bg-[#fcf8ef] shadow-[20px_20px_30px_rgba(0,0,0,0.14)] flex flex-col items-center justify-center gap-5 pointer-events-auto hover:shadow-[20px_20px_40px_rgba(0,0,0,0.22)] hover:scale-[1.02] transition-all duration-400"
            style={{ width: '38%', aspectRatio: '692 / 336' }}
          >
            <Image src="/images/img_004_instagram.svg" alt="Instagram" width={48} height={48} className="w-11 h-11" />
            <span className="text-[32px] xl:text-[40px] font-semibold uppercase text-[#d8b192] font-[Heebo] tracking-widest leading-none">
              עקבו אחרינו
            </span>
          </a>
        </div>

        {/* Follow Us — mobile */}
        <a
          href="#"
          aria-label="עקבו אחרינו באינסטגרם"
          className="lg:hidden flex flex-col items-center justify-center gap-4 py-12 bg-[#fcf8ef] hover:opacity-80 transition-opacity"
        >
          <Image src="/images/img_004_instagram.svg" alt="Instagram" width={40} height={40} className="w-10 h-10" />
          <span className="text-[28px] font-semibold uppercase text-[#d8b192] font-[Heebo] tracking-widest">
            עקבו אחרינו
          </span>
        </a>

      </div>
    </section>
  )
}
