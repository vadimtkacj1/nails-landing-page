'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { InputHTMLAttributes, forwardRef, CSSProperties } from 'react';

const inputClasses = cva(
  'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border',
  {
    variants: {
      variant: {
        default: 'border-border-light bg-background-card text-text-primary focus:border-primary-DEFAULT focus:ring-primary-DEFAULT',
        primary: 'border-primary-DEFAULT bg-background-card text-primary-DEFAULT focus:border-primary-dark focus:ring-primary-DEFAULT',
        secondary: 'border-secondary-DEFAULT bg-background-card text-secondary-DEFAULT focus:border-secondary-dark focus:ring-secondary-DEFAULT',
      },
      inputSize: {
        small: 'text-sm px-3 py-2',
        medium: 'text-base px-4 py-3',
        large: 'text-lg px-5 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'medium',
    },
  }
)

interface EditTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputClasses> {
  // Required parameters with defaults
  placeholder?: string
  text_font_size?: string
  text_font_family?: string
  text_font_weight?: string
  text_line_height?: string
  text_text_align?: string
  text_text_transform?: string
  text_color?: string
  
  // Optional parameters
  layout_gap?: string
  layout_width?: string
  padding?: string
  margin?: string
  position?: string
  
  // Additional props
  error?: string
  label?: string
}

const EditText = forwardRef<HTMLInputElement, EditTextProps>(({
  // Required parameters with defaults
  placeholder = "הרשמה",
  text_font_size = "16",
  text_font_family = "Heebo",
  text_font_weight = "600",
  text_line_height = "20px",
  text_text_align = "center",
  text_text_transform = "uppercase",
  text_color = "#d8b192",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  inputSize,
  disabled = false,
  className,
  error,
  label,
  type = 'text',
  ...props
}, ref) => {
  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap.trim() !== ''
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build custom styles
  const customStyles: CSSProperties = {
    fontFamily: text_font_family,
  }

  // Build Tailwind classes for styling with responsive support
  const styleClasses = [
    `text-[${text_font_size}px] sm:text-[${text_font_size}px]`,
    `font-[${text_font_weight}]`,
    `leading-[${text_line_height}]`,
    `text-${text_text_align}`,
    text_text_transform,
    `placeholder:text-[${text_color}]`,
    error ? 'border-background-accent focus:ring-background-accent' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={hasValidGap ? `flex flex-col gap-[${layout_gap}]` : 'flex flex-col'}>
      {label && (
        <label className="text-sm font-medium text-text-primary mb-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        style={customStyles}
        className={twMerge(
          inputClasses({ variant, inputSize }),
          styleClasses,
          optionalClasses,
          className
        )}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? 'input-error' : undefined}
        {...props}
      />
      {error && (
        <span id="input-error" className="text-sm text-background-accent mt-1">
          {error}
        </span>
      )}
    </div>
  )
})

EditText.displayName = 'EditText'

export default EditText