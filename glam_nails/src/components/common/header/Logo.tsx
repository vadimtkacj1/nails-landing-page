'use client';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const Logo = () => (
  <div className="flex flex-row gap-[8px] justify-center items-center">
    <img
      src={`${BASE}/logo.png`}
      alt="Glam Nails logo"
      width={52}
      height={50}
      className="w-[40px] h-[38px] sm:w-[46px] sm:h-[44px] md:w-[52px] md:h-[50px]"
    />
  </div>
)

export default Logo;
