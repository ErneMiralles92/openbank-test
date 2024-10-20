export const COLORS = {
  primary: '#FF0049',
  secondary: '#002B45',
  terciary: '#FFF1E5',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  current: 'currentColor',
} as const

type Color = keyof typeof COLORS

export const FILL_COLORS: Record<Color, `fill-${Color}`> = {
  primary: 'fill-primary',
  secondary: 'fill-secondary',
  terciary: 'fill-terciary',
  white: 'fill-white',
  black: 'fill-black',
  transparent: 'fill-transparent',
  current: 'fill-current',
} as const
