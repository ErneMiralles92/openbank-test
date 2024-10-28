import { type ReactNode } from 'react'
import BaseStepperHeader from './BaseStepperHeader'

type Props = {
  actions?: ReactNode
  activeStep?: number
  children?: ReactNode
  className?: string
  length: number
  title?: string
}

export default function BaseStepper({
  actions,
  activeStep = 0,
  children,
  className,
  length,
  title,
}: Props) {
  return (
    <div className={`shadow-md ${className}`}>
      <BaseStepperHeader activeStep={activeStep} length={length} />
      <div className="mt-6 px-3 md:px-20">
        {title ? (
          <>
            <h2 className="font-black text-secondary text-2xl">{title}</h2>
            <div className="h-1 w-14 bg-[#3FC2DF] mt-2" />
          </>
        ) : null}

        <article className="min-h-80 bg-white py-3 border-b border-b-secondary/10">
          {children}
        </article>
      </div>
      {actions ? <div className="py-3 px-4">{actions}</div> : null}
    </div>
  )
}
