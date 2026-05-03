'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import SplitWords from '@/components/ui/SplitWords';

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
}

export default function NewsSection() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'טיפול הציפורניים הטוב ביותר',
      excerpt: 'הרגלים יומיומיים פשוטים שיעזרו למניקור להישאר רענן ובריא יותר לאורך זמן: הידרציה, טיפוח עדין והגנה בבית.',
      image: '/images/img_female_hand_wit_666x548.png',
    },
    {
      id: 2,
      title: 'אמנות הציפורניים',
      excerpt: 'הכירו את צורות הציפורניים, הגימורים והפלטות הפופולריים של העונה — שנבחרו בקפידה על ידי מאסטריות הסלון שלנו.',
      image: '/images/img_negin_esmaeili.png',
    },
  ]

  return (
    <section dir="rtl" className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-24">

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <Reveal dir="up">
          <SplitWords className="text-[26px] sm:text-[32px] lg:text-[40px] font-semibold leading-tight text-center uppercase text-[#d8b192] font-[Heebo] mb-12 lg:mb-16">
            מעודנים וטרנדים
          </SplitWords>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} dir="fade" delay={i * 150} className="news-card-reveal">
              <article className="flex flex-col gap-5 text-right">
                <div className="parallax-card w-full">
                  <div data-parallax="0.09">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={548}
                      height={420}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-semibold leading-snug capitalize text-[#757575] font-[Heebo]">
                  {post.title}
                </h3>
                <p className="text-[14px] lg:text-[16px] font-normal leading-relaxed text-[#757575] font-[Heebo]">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.id}`} className="flex flex-row-reverse items-center gap-2.5 group w-fit">
                  <Image
                    src="/images/img_arrow_blue_gray_900.svg"
                    alt=""
                    width={38}
                    height={16}
                    className="w-[32px] lg:w-[38px] h-auto rotate-180 group-hover:-translate-x-1.5 transition-transform duration-300"
                  />
                  <span className="text-[13px] lg:text-[14px] uppercase tracking-wide text-[#757575] font-[Heebo] group-hover:text-[#d8b192] transition-colors duration-200">
                    קראו עוד
                  </span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-0 w-[220px] lg:w-[340px] pointer-events-none opacity-80 deco-float">
        <div data-parallax="0.22">
          <Image src="/images/img_04_3.png" alt="" width={384} height={678} className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}