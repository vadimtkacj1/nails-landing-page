'use client'

import type { ReactNode } from 'react'
import AdminHeader from '@/components/admin/AdminHeader'

function En({ children }: { children: ReactNode }) {
  return (
    <div
      dir="ltr"
      className="mt-2 pl-3 border-l-2 border-slate-200 text-[13px] text-[#64748b] leading-relaxed"
    >
      <span className="font-semibold text-[#94a3b8]">English · </span>
      {children}
    </div>
  )
}

const sections: { id: string; titleHe: string; titleEn: string; body: ReactNode }[] = [
  {
    id: 'login',
    titleHe: 'כניסה',
    titleEn: 'Sign in',
    body: (
      <>
        <ol className="list-decimal pr-5 space-y-2 mr-4">
          <li>פתחו את דף הכניסה של האדמין.</li>
          <li>הזינו את הסיסמה שקיבלתם.</li>
          <li>לחצו «כניסה».</li>
        </ol>
        <En>Open the admin login page, enter the password you were given, and press Sign in.</En>
      </>
    ),
  },
  {
    id: 'bookings',
    titleHe: 'תורים',
    titleEn: 'Bookings',
    body: (
      <>
        <ul className="list-disc pr-5 space-y-2 mr-4">
          <li>צפייה בכל התורים שנקבעו.</li>
          <li>הוספת תור חדש — מלאו שם, טלפון, תאריך ושעה ושמרו.</li>
          <li>עריכה — עדכנו פרטים ושמרו.</li>
          <li>מחיקה — כשצריך לבטל תור.</li>
        </ul>
        <En>View all appointments. Add new ones (name, phone, date, time). Edit or delete when needed.</En>
      </>
    ),
  },
  {
    id: 'slots',
    titleHe: 'זמינות',
    titleEn: 'Availability',
    body: (
      <>
        <ul className="list-disc pr-5 space-y-2 mr-4">
          <li>בחרו לכל יום בשבוע אם הוא פתוח ואילו שעות מוצעות ללקוחות באתר.</li>
          <li>שמרו — הטופס הציבורי יציג את אותן שעות.</li>
        </ul>
        <En>For each weekday, turn days on/off and set the time slots customers see on the public booking form. Save your changes.</En>
      </>
    ),
  },
  {
    id: 'messenger',
    titleHe: 'תפוצה',
    titleEn: 'Broadcast code',
    body: (
      <>
        <ol className="list-decimal pr-5 space-y-2 mr-4">
          <li>העתיקו את קוד ההרשמה (כפתור copy).</li>
          <li>שלחו את הקוד ללקוח — הוא מדביק אותו בצ&apos;אט של בוט הטלגרם שלכם.</li>
          <li>אחרי שהלקוח שלח את הקוד, הוא מצטרף לרשימת העדכונים של הסלון.</li>
        </ol>
        <En>Copy the subscribe code and send it to the customer. They paste it into your Telegram bot chat to join your update list.</En>
      </>
    ),
  },
  {
    id: 'telegram',
    titleHe: 'טלגרם',
    titleEn: 'Telegram alerts',
    body: (
      <>
        <ul className="list-disc pr-5 space-y-2 mr-4">
          <li>
            <strong>פעיל</strong> — סמנו אם רוצים שהמערכת תשלח הודעות טלגרם למנויים; בטלו אם לא.
          </li>
          <li>
            <strong>פעם ביום בשעה קבועה</strong> — בחרו שעה ושמרו; המנויים יקבלו תזכורת יומית על התורים למחר.
          </li>
          <li>
            <strong>מיד אחרי כל הזמנה חדשה</strong> — כל תור חדש מהאתר או מהאדמין ישלח עדכון מיידי למנויים.
          </li>
          <li>לחצו <strong>שמור</strong> אחרי שינוי.</li>
        </ul>
        <En>
          Use <strong>Active</strong> to turn alerts on or off. Choose <strong>once a day at a set time</strong> for a daily tomorrow summary, or{' '}
          <strong>right after each new booking</strong> for instant messages. Press <strong>Save</strong>.
        </En>
      </>
    ),
  },
]

export default function AdminHelpPage() {
  return (
    <div className="min-w-0 max-w-full" dir="rtl">
      <AdminHeader title="" />
      <div className="p-4 md:p-8 max-w-[640px] text-right">
        <h1 className="text-[22px] font-bold text-[#0f172a] mb-1">עזרה — איך משתמשים</h1>
        <p className="text-[14px] text-[#64748b] mb-6" dir="ltr" style={{ textAlign: 'right' }}>
          <span className="inline-block">How to use the admin · Hebrew + English</span>
        </p>

        <nav className="mb-8 p-4 rounded-xl bg-slate-50 border border-slate-100 text-[14px]">
          <p className="font-semibold text-[#334155] mb-2">בעמוד זה</p>
          <ul className="space-y-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-[#4f46e5] hover:underline">
                  {s.titleHe}
                  <span className="text-[#94a3b8] font-normal mx-1">·</span>
                  <span dir="ltr" className="inline text-[13px] text-[#64748b]">
                    {s.titleEn}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-20">
              <h2 className="text-[17px] font-semibold text-[#0f172a] mb-3 pb-2 border-b border-slate-200">
                {s.titleHe}
                <span className="text-[#94a3b8] font-normal mx-2">·</span>
                <span dir="ltr" className="text-[15px] font-semibold text-[#64748b]">
                  {s.titleEn}
                </span>
              </h2>
              <div className="text-[14px] text-[#475569] leading-relaxed">{s.body}</div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
