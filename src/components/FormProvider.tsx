import { FormContext } from '@/context/form'
import { useState, type ReactNode, useRef } from 'react'

export function FormProvider({ children }: { children: ReactNode }) {
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const errorsRef = useRef<Record<string, string>>({})
  const inputRefs = useRef<HTMLInputElement[]>([])

  const validate = () => {
    inputRefs.current.forEach(input => {
      input.focus()
      input.blur()
    })
    const isValid = Object.keys(errorsRef.current).every(
      key => !errorsRef.current[key]
    )
    return isValid
  }

  return (
    <FormContext.Provider
      value={{
        errors,
        errorsRef,
        inputRefs,
        setErrors,
        setTouched,
        touched,
        validate,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
