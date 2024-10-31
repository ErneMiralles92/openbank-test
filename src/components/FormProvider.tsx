import { FormContext } from '@/context/form'
import { useState, type ReactNode } from 'react'

export function FormProvider({ children }: { children: ReactNode }) {
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})

  return (
    <FormContext.Provider value={{ touched, setTouched, errors, setErrors }}>
      {children}
    </FormContext.Provider>
  )
}
