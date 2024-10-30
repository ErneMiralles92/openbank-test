import { useEffect, type ReactNode } from 'react'
import BaseStepperHeader from './BaseStepperHeader'
import BaseButton from '@/components/ui/BaseButton'
import { useTranslation } from 'react-i18next'

type Props = {
  activeStep?: number
  children?: ReactNode
  className?: string
  length: number
  title?: string
  disabledNextButton?: boolean
  onClickNext?: (...arg: unknown[]) => void
  onClickBack?: (...arg: unknown[]) => void
}

export default function BaseStepper({
  activeStep = 0,
  children,
  className,
  length,
  title,
  onClickBack,
  onClickNext,
  disabledNextButton = false,
}: Props) {
  const { t } = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeStep])

  return (
    <div className={`shadow-md ${className}`}>
      <BaseStepperHeader activeStep={activeStep} length={length} />
      <div className="my-6 px-3 md:px-20">
        {title ? (
          <>
            <h2 className="font-black text-secondary text-2xl">{title}</h2>
            <div className="h-1 w-10 bg-[#3FC2DF] mt-2" />
          </>
        ) : null}

        <div className="min-h-80 bg-white py-3 mt-8">{children}</div>
      </div>
      <div className="border-t border-t-secondary/10 py-5 px-3 md:px-20 flex">
        {activeStep > 0 ? (
          <BaseButton
            variant="text"
            color="secondary"
            onClick={() => onClickBack && onClickBack()}
          >
            {t('stepper.back')}
          </BaseButton>
        ) : null}
        <div className="flex-grow" />
        <BaseButton
          variant="filled"
          color="secondary"
          iconName="ArrowRight"
          onClick={() => onClickNext && onClickNext()}
          disabled={disabledNextButton}
        >
          {t('stepper.next')}
        </BaseButton>
      </div>
    </div>
  )
}
