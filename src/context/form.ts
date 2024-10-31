import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

type FormContext = {
  touched: Record<string, boolean>
  setTouched: Dispatch<SetStateAction<Record<string, boolean>>>
  errors: Record<string, string>
  setErrors: Dispatch<SetStateAction<Record<string, string>>>
}

export const FormContext = createContext<FormContext | null>(null)
