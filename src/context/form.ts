import type { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { createContext } from 'react'

type FormContext = {
  touched: Record<string, boolean>
  setTouched: Dispatch<SetStateAction<Record<string, boolean>>>
  errors: Record<string, string>
  setErrors: Dispatch<SetStateAction<Record<string, string>>>
  inputRefs: MutableRefObject<HTMLInputElement[]>
  errorsRef: MutableRefObject<Record<string, string>>
  validate: () => boolean
  fieldsRef: MutableRefObject<Record<string, string>>
}

export const FormContext = createContext<FormContext | null>(null)
