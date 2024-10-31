import { useState } from 'react'
import type { IconName } from '@/types'

export const usePasswordField = () => {
  const [isPasswordType, setIsPasswordType] = useState(true)

  const appendOnClick = () => setIsPasswordType(state => !state)

  const appendIcon: IconName = isPasswordType ? 'Eye' : 'EyeOff'

  return {
    type: isPasswordType ? 'password' : 'text',
    appendOnClick,
    appendIcon,
  }
}
