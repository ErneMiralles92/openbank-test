import { MAX_LENGTH, MIN_LENGTH } from '@/constants/validation'
import i18n from '@/i18n'

const isBetween = (value: string, minLength: number, maxLength: number) => {
  return value.length >= minLength && value.length <= maxLength
}

const matchPattern = (value: string) => {
  return value.match(/^(?=.*[A-Z])(?=.*\d).+$/)
}

export const passwordValidation = (rawValue: string) => {
  const value = rawValue.trim()
  if (!value) return i18n.t('form.errors.required')

  if (!isBetween(value, MIN_LENGTH, MAX_LENGTH)) {
    return i18n.t('form.errors.between', { min: MIN_LENGTH, max: MAX_LENGTH })
  }

  if (!matchPattern(value)) {
    return i18n.t('form.errors.pattern')
  }
  return ''
}

export const repeatPasswordValidation = (password: string) => {
  return (rawValue: string) => {
    const value = rawValue.trim()
    if (!value) return i18n.t('form.errors.required')
    console.log({ value, password })

    if (value !== password) {
      return i18n.t('form.errors.differentPassword')
    }
    return ''
  }
}
