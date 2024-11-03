import BaseInput from '@/components/ui/BaseInput'
import { forwardRef, type ComponentProps } from 'react'
import { usePasswordField } from './usePasswordField'

type Props = ComponentProps<typeof BaseInput>

export default forwardRef<HTMLInputElement, Props>(function BasePasswordField(
  props: Props,
  ref
) {
  const passwordFieldProps = usePasswordField()

  return <BaseInput ref={ref} {...passwordFieldProps} {...props} />
})
