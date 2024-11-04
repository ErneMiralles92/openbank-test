import { useEffect, type ReactNode } from 'react'
import BaseStepperHeader from './BaseStepperHeader'
import BaseButton from '@/components/ui/BaseButton'
import { useTranslation } from 'react-i18next'
import type { ButtonVariant, Color } from '@/types'

type Props = {
  activeStep?: number
  children?: ReactNode
  className?: string
  disabledBack?: boolean
  hideBackButton?: boolean
  length: number
  loadingNextButton?: boolean
  nextButtonColor?: Color
  nextButtonText?: string
  nextButtonVariant?: ButtonVariant
  onClickBack?: (...arg: unknown[]) => void
  onClickNext?: (...arg: unknown[]) => void
  title?: string
}

export default function BaseStepper({
  activeStep = 0,
  children,
  className,
  disabledBack = false,
  length,
  loadingNextButton = false,
  nextButtonColor,
  hideBackButton = false,
  nextButtonText,
  nextButtonVariant,
  onClickBack,
  onClickNext,
  title,
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

        <div className="bg-white py-3 mt-8">{children}</div>
      </div>
      <div className="border-t border-t-secondary/10 py-5 px-3 md:px-20 flex">
        {activeStep > 0 && !hideBackButton ? (
          <BaseButton
            variant="text"
            color="secondary"
            disabled={disabledBack}
            onClick={() => onClickBack && onClickBack()}
          >
            {t('stepper.back')}
          </BaseButton>
        ) : null}
        <div className="flex-grow" />
        <BaseButton
          variant={nextButtonVariant ?? 'filled'}
          color={nextButtonColor ?? 'secondary'}
          iconName="ArrowRight"
          onClick={() => onClickNext && onClickNext()}
          loading={loadingNextButton}
        >
          {nextButtonText ?? t('stepper.next')}
        </BaseButton>
      </div>
    </div>
  )
}
