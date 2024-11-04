import type { ICONS } from '@/components/ui/BaseIcon/icons'
import type { COLORS } from '@/constants/colors'

export type IconName = keyof typeof ICONS
export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl'
export type Color = keyof typeof COLORS
export type ButtonVariant = 'filled' | 'text'
