import { Fragment } from 'react'
import BaseIcon from '@/components/ui/BaseIcon'

type Props = {
  activeStep: number
  length: number
}

export default function BaseStepperHeader({ activeStep, length }: Props) {
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
  )
}
