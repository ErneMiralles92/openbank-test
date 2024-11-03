import type { ChangeEventHandler, FocusEventHandler, RefCallback } from 'react'
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

  const { setTouched, setErrors, errors, touched, inputRefs, errorsRef } =
    useFormContext() ?? {}

  const validate = () => {
    const error = validation && validation(value)
    setErrors(state => ({ ...state, [name]: error ?? '' }))
    errorsRef.current = { ...errorsRef.current, [name]: error ?? '' }
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target
    setValue(value)
    validate()
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = () => {
    setTouched(state => ({ ...state, [name]: true }))
    validate()
  }

  const refHandler: RefCallback<HTMLInputElement> = el =>
    el && inputRefs.current.push(el)

  const inputProps = {
    onChange: handleChange,
    onBlur: handleBlur,
    value: value,
    error: touched[name] ? errors[name] : '',
    ref: refHandler,
  }

  return inputProps
}
