/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      /* ===== COLOR SYSTEM ===== */
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          dark: "var(--primary-dark)",
          light: "var(--primary-light)",
        },
        // Secondary colors
        secondary: {
          DEFAULT: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        // Text colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          accent: "var(--text-accent)",
          light: "var(--text-light)",
          inverse: "var(--text-inverse)",
        },
        // Background colors
        background: {
          main: "var(--bg-main)",
          card: "var(--bg-card)",
          overlay: "var(--bg-overlay)",
          'neutral-light': "var(--bg-neutral-light)",
          'neutral-dark': "var(--bg-neutral-dark)",
          accent: "var(--bg-accent)",
        },
        // Border colors
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          light: "var(--border-light)",
        },
        // Component-specific colors
        header: {
          background: "var(--header-bg)",
          text: "var(--header-text)",
        },
        footer: {
          background: "var(--footer-bg)",
          text: "var(--footer-text)",
        },
        button: {
          background: "var(--button-bg)",
          text: "var(--button-text)",
          border: "var(--button-border)",
        },
        link: {
          DEFAULT: "var(--link-text)",
          light: "var(--link-text-light)",
          hover: "var(--link-hover)",
        },
        card: {
          background: "var(--card-bg)",
        },
      },

      /* ===== TYPOGRAPHY SYSTEM ===== */
      fontSize: {
        'xs': ['var(--font-size-xs)', { lineHeight: 'var(--line-height-tight)' }],
        'sm': ['var(--font-size-sm)', { lineHeight: 'var(--line-height-snug)' }],
        'base': ['var(--font-size-base)', { lineHeight: 'var(--line-height-normal)' }],
        'lg': ['var(--font-size-lg)', { lineHeight: 'var(--line-height-relaxed)' }],
        'xl': ['var(--font-size-xl)', { lineHeight: 'var(--line-height-loose)' }],
        '2xl': ['var(--font-size-2xl)', { lineHeight: 'var(--line-height-xl)' }],
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)',
      },
      fontFamily: {
        'primary': 'var(--font-primary)',
        'secondary': 'var(--font-secondary)',
      },

      /* ===== SPACING SYSTEM ===== */
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
      },
      padding: {
        'xs': 'var(--padding-xs)',
        'sm': 'var(--padding-sm)',
        'md': 'var(--padding-md)',
        'lg': 'var(--padding-lg)',
        'xl': 'var(--padding-xl)',
        '2xl': 'var(--padding-2xl)',
      },
      gap: {
        'xs': 'var(--gap-xs)',
        'sm': 'var(--gap-sm)',
        'md': 'var(--gap-md)',
        'lg': 'var(--gap-lg)',
        'xl': 'var(--gap-xl)',
        '2xl': 'var(--gap-2xl)',
      },

      /* ===== BORDER SYSTEM ===== */
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      borderWidth: {
        'thin': 'var(--border-width-thin)',
      },

      /* ===== LAYOUT SYSTEM ===== */
      width: {
        'xs': 'var(--width-xs)',
        'sm': 'var(--width-sm)',
        'md': 'var(--width-md)',
        'lg': 'var(--width-lg)',
        'xl': 'var(--width-xl)',
        '2xl': 'var(--width-2xl)',
      },

      /* ===== ANIMATION & TRANSITIONS ===== */
      transitionDuration: {
        'DEFAULT': '300ms',
      },
      transitionTimingFunction: {
        'DEFAULT': 'ease-in-out',
      },

      /* ===== BOX SHADOW ===== */
      boxShadow: {
        'card': '0 2px 8px var(--card-shadow)',
        'card-hover': '0 4px 16px var(--card-shadow)',
      },
    },
  },
  plugins: [],
};