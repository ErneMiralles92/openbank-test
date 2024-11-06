import { forwardRef, useMemo, useState, type InputHTMLAttributes } from 'react'
import BaseIcon from '../BaseIcon'
import type { IconName } from '@/types'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  appendIcon?: IconName
  appendOnClick?: () => void
  className?: string
  dataTestId?: string
  disabled?: boolean
  error?: string
  id: string
  label?: string
  maxLength?: number
  showCounter?: boolean
  value: string | number
}

export default forwardRef<HTMLInputElement, Props>(function BaseInput(
  {
    appendIcon,
    appendOnClick,
    className,
    disabled,
    error,
    id,
    label,
    maxLength,
    showCounter = false,
    value,
    onBlur,
    dataTestId,
    ...propsRest
  },
  ref
) {
  const [focused, setFocused] = useState(false)

  const inputWrapperClasses = useMemo(() => {
    let classes =
      'flex items-center h-10 border border-black/25 hover:border-black/40 has-[:focus]:border-black rounded'
    if (error)
      classes +=
        ' border border-error/50 hover:border-error/70 has-[:focus]:border-error text-error'
    if (disabled)
      classes +=
        ' has-[:disabled]:bg-grey/30 has-[:disabled]:border-grey/30 has-[:disabled]:pointer-events-none has-[:disabled]:text-grey'

    return classes
  }, [error, disabled])

  return (
    <div data-testid={dataTestId} className={`flex flex-col ${className}`}>
      {label ? (
        <label
          htmlFor={id}
          className={`font-bold mb-1 text-sm ${disabled ? 'text-grey' : ''}`}
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
          ref={ref}
          onBlur={e => {
            setFocused(false)
            onBlur && onBlur(e)
          }}
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
      <div className="h-5	grid">
        {error ? <div className="text-xs text-error">{error}</div> : null}
        {maxLength && showCounter ? (
          <div className="col-start-2 text-sm text-black/60 justify-self-end">{`${String(value).length ?? 0}/${maxLength}`}</div>
        ) : null}
      </div>
    </div>
  )
})
