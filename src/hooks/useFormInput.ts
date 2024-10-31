import type { ChangeEventHandler, FocusEventHandler } from 'react'
import { useState } from 'react'
import { useFormContext } from '@/hooks/useFormContext'

export function useFormInput({
  initialValue = '',
  name,
  validation,
}: {
  initialValue?: string
  name: string
  validation?: (value: string) => string
}) {
  const [value, setValue] = useState(initialValue)

  const { setTouched, setErrors, errors } = useFormContext() ?? {}

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target
    setValue(value)
    const error = validation && validation(value)
    console.log({ error })

    setErrors(state => ({ ...state, [name]: error ?? '' }))
  }

  const handleFocus: FocusEventHandler<HTMLInputElement> = () => {
    setTouched(state => ({ ...state, [name]: true }))
  }

  const inputProps = {
    onChange: handleChange,
    onFocus: handleFocus,
    value: value,
    error: errors[name],
  }

  return inputProps
}
