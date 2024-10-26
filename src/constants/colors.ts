export const COLORS = {
  primary: '#FF0049',
  secondary: '#002B45',
  terciary: '#FFF1E5',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#9E9E9E',
  error: '#EF5350',
  transparent: 'transparent',
  current: 'currentColor',
} as const

type Color = keyof typeof COLORS

export const BACKGROUND_COLORS: Record<Color, `bg-${Color}`> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  terciary: 'bg-terciary',
  white: 'bg-white',
  black: 'bg-black',
  grey: 'bg-grey',
  error: 'bg-error',
  transparent: 'bg-transparent',
  current: 'bg-current',
} as const

export const TEXT_COLORS: Record<Color, `text-${Color}`> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  terciary: 'text-terciary',
  white: 'text-white',
  black: 'text-black',
  grey: 'text-grey',
  error: 'text-error',
  transparent: 'text-transparent',
  current: 'text-current',
} as const

export const FILL_COLORS: Record<Color, `fill-${Color}`> = {
  primary: 'fill-primary',
  secondary: 'fill-secondary',
  terciary: 'fill-terciary',
  white: 'fill-white',
  black: 'fill-black',
  grey: 'fill-grey',
  error: 'fill-error',
  transparent: 'fill-transparent',
  current: 'fill-current',
} as const
