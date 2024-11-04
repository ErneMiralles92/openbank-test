import { FormContext } from '@/context/form'
import { useState, type ReactNode, useRef } from 'react'

export function FormProvider({ children }: { children: ReactNode }) {
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const errorsRef = useRef<Record<string, string>>({})
  const inputRefs = useRef<HTMLInputElement[]>([])
  const fieldsRef = useRef<Record<string, string>>({})

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
        fieldsRef,
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
