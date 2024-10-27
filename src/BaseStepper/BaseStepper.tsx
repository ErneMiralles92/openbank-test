import BaseIcon from '@/components/ui/BaseIcon'
import { Fragment, type ReactNode } from 'react'

type Props = {
  actions?: ReactNode
  activeStep?: number
  children?: ReactNode
  className?: string
  length: number
}

export default function BaseStepper({
  actions,
  activeStep = 0,
  children,
  className,
  length,
}: Props) {
  const stepIndicatorClasses = (index: number) => {
    let classes =
      'text-xs h-6 w-6 text-white flex justify-center items-center rounded-full'

    if (activeStep > index) {
      classes += ' bg-primary'
    } else if (activeStep === index) {
      classes += ` bg-secondary shadow-xl triangle-container`
    } else {
      classes += ' bg-secondary/50'
    }

    return classes
  }

  return (
    <div className={`shadow-md ${className}`}>
      <header className="h-16 w-full bg-secondary/25 grid items-center">
        <div className="flex justify-self-center items-center">
          {Array(length)
            .fill(0)
            .map((_, index) => (
              <Fragment key={`step-${index}`}>
                {index ? (
                  <span
                    className={`h-1 w-10 ${activeStep >= index ? 'bg-primary' : 'bg-secondary/50'}`}
                  />
                ) : null}
                <span className={stepIndicatorClasses(index)}>
                  {activeStep > index ? (
                    <BaseIcon size="sm" iconName="Checkmark" />
                  ) : (
                    index + 1
                  )}
                </span>
              </Fragment>
            ))}
        </div>
      </header>
      <article className="min-h-80 bg-white py-3 px-4 border-b border-b-secondary/10">
        {children}
      </article>
      {actions ? <div className="py-3 px-4">{actions}</div> : null}
    </div>
  )
}
