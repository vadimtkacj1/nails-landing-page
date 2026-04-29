'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';

const navItems = ['בית', 'אודות', 'מוצרים', 'צור קשר'];

const logo = (
  <a href="/" aria-label="Lily Studio" className="shrink-0">
    <span className="font-[Heebo] font-light tracking-[0.2em] select-none text-[#323232] text-[15px] sm:text-[17px] lg:text-[19px] uppercase">
      Lily Studio
    </span>
  </a>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf5ef] shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <div className="w-full px-5 sm:px-6 lg:px-14 py-3 lg:py-4">
        {/* Мобилка: Lily Studio слева · קבע תור и бургер справа */}
        <div dir="ltr" className="flex md:hidden items-center gap-2 sm:gap-3 w-full">
          {logo}
          <div className="flex-1 min-w-0" aria-hidden />
          <Button
            text="קבע תור"
            text_font_size="13"
            text_color="#ffffff"
            fill_background_color="#d8b192"
            border_border="none"
            border_border_radius="9999px"
            className="px-4 py-2 sm:px-5 shrink-0"
            onClick={() => {}}
          />
          <button
            type="button"
            className="flex flex-col justify-center items-center gap-[5px] w-8 h-8 shrink-0"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="תפריט"
            aria-expanded={mobileOpen}
          >
            <span className="w-6 h-0.5 block rounded-full bg-[#757575]" />
            <span className="w-6 h-0.5 block rounded-full bg-[#757575]" />
            <span className="w-6 h-0.5 block rounded-full bg-[#757575]" />
          </button>
        </div>

        {/* Десктоп: кнопка слева · меню по центру · логотип справа */}
        <div dir="ltr" className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center shrink-0">
            <Button
              text="קבע תור"
              text_font_size="13"
              text_color="#ffffff"
              fill_background_color="#d8b192"
              border_border="none"
              border_border_radius="9999px"
              className="px-5 py-2 lg:px-6 lg:py-2.5"
              onClick={() => {}}
            />
          </div>
          <nav dir="rtl" className="flex items-center gap-5 lg:gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[13px] lg:text-[15px] font-normal font-[Heebo] hover:opacity-70 transition-opacity duration-200 text-[#757575]"
              >
                {item}
              </a>
            ))}
          </nav>
          {logo}
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-[#fdf5ef] border-t border-[#e8d8c8] px-5 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setMobileOpen(false)}
              className="text-[16px] font-normal text-[#757575] font-[Heebo] py-3 border-b border-[#f0e4d8] last:border-0 hover:text-[#d8b192] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
