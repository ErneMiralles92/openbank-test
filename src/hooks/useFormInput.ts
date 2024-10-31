import type { ChangeEvent } from 'react'
import { useState } from 'react'

export function useFormInput(initialValue: string = '') {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
  }

  return inputProps
}
