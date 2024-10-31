import BaseInput from '@/components/ui/BaseInput'
import type { ComponentProps } from 'react'
import { usePasswordField } from './usePasswordField'

type Props = ComponentProps<typeof BaseInput>

export default function BasePasswordField(props: Props) {
  const passwordFieldProps = usePasswordField()

  return <BaseInput {...passwordFieldProps} {...props} />
}
