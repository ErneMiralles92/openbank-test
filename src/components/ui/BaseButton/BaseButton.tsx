import type { ReactNode, HTMLAttributes } from 'react'
import type { Color, IconName } from '@/types'
import BaseIcon from '@/components/ui/BaseIcon'
import { exhaustiveCheck } from '@/helpers'
import { BACKGROUND_COLORS, TEXT_COLORS } from '@/constants/colors'

type ButtonVariant = 'filled' | 'text'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  color?: Color
  children?: ReactNode
  iconName?: IconName
  disabled?: boolean
  loading?: boolean
}

const commonClasses =
  'py-2 px-3 rounded-sm font-bold focus:outline-none focus-visible:outline-none'

const disabledClasses: Record<ButtonVariant, string> = {
  filled: 'bg-black/10 text-black/50 cursor-not-allowed',
  text: 'text-black/50 cursor-not-allowed',
}

function getButtonClass({
  variant,
  color,
  disabled,
}: {
  variant: ButtonVariant
  color: Color
  disabled: boolean
  loading: boolean
}) {
  if (disabled) return disabledClasses[variant]
  if (variant === 'filled') {
    return `${BACKGROUND_COLORS[color]} text-white hover:opacity-75 hover:shadow-md focus-visible:shadow-lg`
  }
  if (variant === 'text') {
    return `${TEXT_COLORS[color]} hover:bg-black/5 focus-visible:bg-black/10`
  }
  exhaustiveCheck(variant)
}

export default function BaseButton({
  variant = 'filled',
  color = 'primary',
  disabled = false,
  loading = false,
  iconName,
  children,
  ...restProps
}: Props) {
  const buttonClass = `${getButtonClass({ variant, color, disabled, loading })} ${commonClasses}`

  return (
    <button
      className={buttonClass}
      disabled={disabled || loading}
      {...restProps}
    >
      <div className="relative">
        {loading && (
          <BaseIcon
            className="absolute left-1/2	top-1/2 -translate-x-1/2 -translate-y-1/2"
            iconName="Loader"
            color="current"
          />
        )}
        <div className={`flex ${loading ? 'invisible' : ''}`}>
          {children}
          {iconName ? (
            <BaseIcon className="ml-2" iconName={iconName} color="current" />
          ) : null}
        </div>
      </div>
    </button>
  )
}
