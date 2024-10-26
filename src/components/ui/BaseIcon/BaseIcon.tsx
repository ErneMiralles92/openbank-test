import { createElement, type MouseEventHandler } from 'react'
import type { Color, IconName, SizeVariant } from '@/types'
import { ICONS } from './icons'
import { FILL_COLORS } from '@/constants/colors'

type Props = {
  iconName: IconName
  size?: SizeVariant
  color?: Color
  className?: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

const SIZE_MAP: Record<SizeVariant, string> = {
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
}

export default function BaseIcon({
  iconName,
  size = 'md',
  color = 'current',
  className,
  onClick,
}: Props) {
  const svgIconStyle = {
    width: SIZE_MAP[size],
    height: SIZE_MAP[size],
  }

  const colorClass = FILL_COLORS[color]

  return (
    <div
      aria-label={iconName}
      role="img"
      className={`w-fit ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {createElement(ICONS[iconName], {
        style: svgIconStyle,
        className: colorClass,
      })}
    </div>
  )
}
