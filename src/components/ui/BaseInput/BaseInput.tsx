import { useMemo, useState, type InputHTMLAttributes } from 'react'
import BaseIcon from '../BaseIcon'
import type { IconName } from '@/types'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  appendIcon?: IconName
  appendOnClick?: () => void
  className?: string
  disabled?: boolean
  errorMessages?: string[]
  id: string
  label?: string
  maxLength?: number
  value: string | number
}

export default function BaseInput({
  appendIcon,
  appendOnClick,
  className,
  disabled,
  errorMessages,
  id,
  label,
  maxLength,
  value,
  ...propsRest
}: Props) {
  const [focused, setFocused] = useState(false)

  const hasError = errorMessages && errorMessages?.length > 0
  const inputWrapperClasses = useMemo(() => {
    let classes =
      'flex items-center h-10 border border-black/25 hover:border-black/40 has-[:focus]:border-black rounded'
    if (hasError)
      classes +=
        ' border border-error/50 hover:border-error/70 has-[:focus]:border-error text-error'
    if (disabled)
      classes +=
        ' has-[:disabled]:bg-grey/30 has-[:disabled]:border-grey/30 has-[:disabled]:pointer-events-none has-[:disabled]:text-grey'

    return classes
  }, [hasError, disabled])

  return (
    <div className={className}>
      {label ? (
        <label
          htmlFor={id}
          className={`font-bold ${disabled ? 'text-grey' : ''}`}
        >
          {label}
        </label>
      ) : null}
      <div className={inputWrapperClasses}>
        <input
          className="input rounded h-full w-full focus:outline-none pl-3 disabled:bg-transparent text-black"
          id={id}
          value={value}
          disabled={disabled}
          maxLength={maxLength}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...propsRest}
        />
        {appendIcon ? (
          <BaseIcon
            className="px-3"
            iconName={appendIcon}
            onClick={appendOnClick ? appendOnClick : undefined}
          />
        ) : null}
      </div>
      {focused ? (
        <div className="relative h-1 w-14 -mt-1 bg-[#f59e0b]"></div>
      ) : null}
      <div className="h-5	grid grid-cols-2">
        {hasError ? (
          <div className="text-sm text-error">{errorMessages[0]}</div>
        ) : null}
        {maxLength ? (
          <div className="col-start-2 text-sm text-black/60 justify-self-end">{`${String(value).length ?? 0}/${maxLength}`}</div>
        ) : null}
      </div>
    </div>
  )
}
