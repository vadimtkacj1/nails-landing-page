import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';

const products = [
  { id: 1, name: 'שכבת בסיס', description: 'צל עדין / 5', image: '/images/img_layer_6.png' },
  { id: 2, name: 'לק ג׳ל', description: 'סרבט עדין / 5', image: '/images/img_layer_3.png' },
  { id: 3, name: 'שכבת טופ', description: 'מארג׳ קייצי / 5', image: '/images/img_layer_4.png' },
  { id: 4, name: 'לק מאט', description: 'פלט כחול / 5', image: '/images/img_layer_5.png' },
]

export default function ProductsSection() {
  return (
    <section className="w-full bg-[#d8b192] py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-14">
        <div className="flex flex-col items-center gap-10 sm:gap-12 lg:gap-16">

          <Reveal dir="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-semibold text-center uppercase text-white font-[Heebo]">
              ערבבו והתאימו את הגוון שלכם
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 w-full max-w-[1000px]">
            {products.map((product, i) => (
              <Reveal key={product.id} dir="up" delay={i * 120} className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center h-[160px] sm:h-[200px] lg:h-[260px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={148}
                    height={294}
                    className="w-auto h-auto max-w-[90px] sm:max-w-[120px] lg:max-w-[148px] max-h-[160px] sm:max-h-[200px] lg:max-h-[260px] hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-white font-[Heebo]">
                    {product.name}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] lg:text-[16px] font-normal text-[#f3f3f3] font-[Heebo]">
                    {product.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
