import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';

interface Service {
  id: number
  icon: string
  title: string
  description: string
  iconW: number
  iconH: number
}

const services: Service[] = [
  {
    id: 1,
    icon: '/images/img_vector_red_200.svg',
    title: 'טיפול לציפורניים',
    description: 'טיפול קלאסי ומתקדם שמתמקד בבריאות הציפורן, קוטיקולה נקייה וגימור מושלם.',
    iconW: 124,
    iconH: 112,
  },
  {
    id: 2,
    icon: '/images/img_group_10.svg',
    title: 'אמנות הציפורניים',
    description: 'עיצובים בהתאמה אישית, פרטים אלגנטיים וטכניקות מודרניות לפי הסגנון שלך.',
    iconW: 142,
    iconH: 162,
  },
  {
    id: 3,
    icon: '/images/img_vector_red_200_122x112.svg',
    title: 'טיפים וטרנדים',
    description: 'השראה טרייה, ייעוץ מקצועי ורעיונות עונתיים כדי לשמור על מניקור מעודכן.',
    iconW: 122,
    iconH: 112,
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#fcf8ef] py-12 sm:py-16 lg:py-24">
      <div className="w-full max-w-[900px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-12">
          {services.map((service, i) => (
            <Reveal
              key={service.id}
              dir="up"
              delay={i * 160}
              className={`flex flex-col items-center gap-5 ${i === 0 ? 'sm:mt-10' : i === 2 ? 'sm:mt-8' : ''}`}
            >
              <div className="flex items-center justify-center h-[120px] lg:h-[162px]">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={service.iconW}
                  height={service.iconH}
                  className="w-auto h-auto max-w-[100px] sm:max-w-[120px] lg:max-w-[142px] max-h-[100px] sm:max-h-[120px] lg:max-h-[162px]"
                />
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#757575] font-[Heebo]">
                  {service.title}
                </h3>
                <p className="text-[14px] lg:text-[16px] font-normal leading-relaxed text-[#757575] font-[Heebo]">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
