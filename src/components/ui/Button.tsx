'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'bg-primary-DEFAULT text-primary-foreground hover:bg-primary-dark focus:ring-primary-DEFAULT',
        secondary: 'bg-secondary-DEFAULT text-secondary-foreground hover:bg-secondary-dark focus:ring-secondary-DEFAULT',
        outline: 'border-2 border-primary-DEFAULT text-primary-DEFAULT bg-transparent hover:bg-primary-light focus:ring-primary-DEFAULT',
      },
      size: {
        small: 'text-xs px-4 py-2',
        medium: 'text-sm px-6 py-3',
        large: 'text-base px-8 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonClasses> {
  // Required parameters with defaults
  text?: string
  text_font_size?: string
  text_font_family?: string
  text_font_weight?: string
  text_line_height?: string
  text_text_align?: string
  text_text_transform?: string
  text_color?: string
  fill_background_color?: string
  border_border_radius?: string
  
  // Optional parameters
  border_border?: string
  layout_align_self?: string
  layout_width?: string
  padding?: string
  margin?: string
  position?: string
  
  // Standard React props
  children?: ReactNode
}

const Button = ({
  // Required parameters with defaults
  text = "גלה עוד",
  text_font_size = "14",
  text_font_family = "Heebo",
  text_font_weight = "400",
  text_line_height = "18px",
  text_text_align = "center",
  text_text_transform = "uppercase",
  text_color = "#ffffff",
  fill_background_color = "#d8b192",
  border_border_radius = "9999px",
  
  // Optional parameters (no defaults)
  border_border,
  layout_align_self,
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  // Safe validation for optional parameters
  const hasValidBorder = border_border && typeof border_border === 'string' && border_border.trim() !== ''
  const hasValidAlignSelf = layout_align_self && typeof layout_align_self === 'string' && layout_align_self.trim() !== ''
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidBorder ? `border-[${border_border}]` : '',
    hasValidAlignSelf ? `self-${layout_align_self}` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    fontFamily: text_font_family,
    // Ensure exact text color regardless of Tailwind variant merging
    color: !variant ? text_color : undefined,
  }

  // Build Tailwind classes for styling with responsive support
  const styleClasses = [
    `text-[${text_font_size}px]`,
    `font-[${text_font_weight}]`,
    `leading-[${text_line_height}]`,
    `text-${text_text_align}`,
    text_text_transform,
    // Only apply these if not using variant system
    !variant ? `text-[${text_color}]` : '',
    !variant ? `bg-[${fill_background_color}]` : '',
    `rounded-[${border_border_radius}]`,
  ].filter(Boolean).join(' ')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    
    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  )
}

export default Button