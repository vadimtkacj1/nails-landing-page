'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function BookingSection() {
  const [appointmentDate, setAppointmentDate] = useState('2026-06-20')
  const [appointmentTime, setAppointmentTime] = useState('12:00')
  const [clientName, setClientName] = useState('')
  const [phone, setPhone] = useState('')

  const formatDate = (value: string) => {
    if (!value) return ''

    const date = new Date(`${value}T00:00:00`)
    return new Intl.DateTimeFormat('he-IL', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(date)
  }

  const timeOptions = useMemo(
    () => [
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
      '18:00',
    ],
    []
  )

  const handleBookNow = () => {
    const trimmedName = clientName.trim()
    const trimmedPhone = phone.trim()

    if (!trimmedName || !trimmedPhone || !appointmentDate || !appointmentTime) {
      window.alert('נא למלא תאריך, שעה, שם וטלפון.')
      return
    }

    window.alert(
      `בקשת תור נשלחה:\n${formatDate(appointmentDate)} בשעה ${appointmentTime}\nשם: ${trimmedName}\nטלפון: ${trimmedPhone}`
    )
  }

  const FieldLabel = ({ label, iconSrc }: { label: string; iconSrc: string }) => (
    <div className="flex items-center gap-1.5">
      <Image src={iconSrc} alt="" width={14} height={14} className="w-3.5 h-3.5 opacity-80" />
      <span className="text-[11px] sm:text-[12px] lg:text-[12px] font-semibold uppercase text-[#b58f72] font-[Heebo] tracking-[0.08em]">
        {label}
      </span>
    </div>
  )

  return (
    <section className="w-full bg-[#fcf8ef] py-10 sm:py-12 lg:py-14">
      <div className="w-full max-w-[1920px] mx-auto px-7 sm:px-8 lg:px-14">
        <div className="rounded-[22px] border border-[#eadbcf] bg-[#fdf7f1] shadow-[0_10px_30px_rgba(106,80,59,0.07)] px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">

          {/* Mobile: 2-col grid | Desktop: single row */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-0 items-end lg:items-center">

          <div className="flex flex-col gap-2 lg:pr-6">
            <FieldLabel label="תאריך" iconSrc="/images/img_calendar4.svg" />
            <div>
              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="w-full bg-transparent text-[14px] sm:text-[15px] lg:text-[16px] font-semibold text-[#5c5c5c] font-[Heebo] outline-none"
                aria-label="בחר תאריך לתור"
              />
              <div className="h-px bg-[#c9b4a3] mt-1.5" />
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:px-6 lg:border-r lg:border-[#e6d6c8]">
            <FieldLabel label="שעה" iconSrc="/images/img_path_stroke.svg" />
            <div className="relative">
              <select
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="appearance-none w-full bg-transparent text-[14px] sm:text-[15px] lg:text-[16px] font-semibold text-[#5c5c5c] font-[Heebo] pr-6 outline-none"
                aria-label="בחר שעה לתור"
              >
                {timeOptions.map((timeSlot) => (
                  <option key={timeSlot} value={timeSlot}>
                    {timeSlot}
                  </option>
                ))}
              </select>
              <Image
                src="/images/img_path_stroke.svg"
                alt=""
                width={14}
                height={8}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-2 pointer-events-none"
              />
              <div className="h-px bg-[#c9b4a3] mt-1.5" />
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:px-6 lg:border-r lg:border-[#e6d6c8]">
            <FieldLabel label="שם" iconSrc="/images/img_subtract.svg" />
            <div>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="השם שלך"
                className="w-full bg-transparent text-[14px] sm:text-[15px] lg:text-[16px] font-semibold text-[#5c5c5c] font-[Heebo] outline-none placeholder:text-[#9a9a9a]"
                aria-label="הכנס שם"
              />
              <div className="h-px bg-[#c9b4a3] mt-1.5" />
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:px-6 lg:border-r lg:border-[#e6d6c8]">
            <FieldLabel label="טלפון" iconSrc="/images/img_vector.svg" />
            <div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+972"
                className="w-full bg-transparent text-[14px] sm:text-[15px] lg:text-[16px] font-semibold text-[#5c5c5c] font-[Heebo] outline-none placeholder:text-[#9a9a9a]"
                aria-label="הכנס מספר טלפון"
              />
              <div className="h-px bg-[#c9b4a3] mt-1.5" />
            </div>
          </div>

          {/* Book Now */}
          <div className="col-span-2 lg:col-span-1 flex items-end justify-center lg:justify-end lg:pl-6 mt-2 lg:mt-0">
            <Button
              text="הזמנת תור"
              text_font_size="14"
              text_color="#ffffff"
              fill_background_color="#d8b192"
              border_border_radius="9999px"
              className="w-full sm:w-auto px-8 py-3 sm:min-w-[220px] shadow-[0_8px_18px_rgba(176,132,100,0.28)] hover:brightness-95 transition-all"
              onClick={handleBookNow}
            />
          </div>

        </div>
        </div>
      </div>
    </section>
  )
}
