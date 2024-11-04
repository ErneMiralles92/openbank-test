import BaseStepper from '@/components/ui/BaseStepper'
import Step1 from './views/ProductInformation'
import Step2 from './views/CreatePasswordForm'
import Step3 from './views/Feedback'
import { useState, type ReactNode, type ComponentProps } from 'react'
import { useTranslation } from 'react-i18next'
import { useFormContext } from './hooks/useFormContext'
import { submitForm } from '@/services/api'

export default function CreatePasswordManager() {
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState(0)
  const { fieldsRef, validate } = useFormContext() ?? {}
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const goToPreviousStep = () => {
    setActiveStep(step => step - 1)
  }
  const goToNextStep = () => {
    setActiveStep(step => step + 1)
  }

  const createPassword = async () => {
    const isValid = validate()
    if (!isValid) return
    setLoading(true)
    const { password } = fieldsRef.current
    try {
      await submitForm(password)
      setSuccess(true)
    } catch (error) {
      setSuccess(false)
    }
    setLoading(false)
    goToNextStep()
  }

  type StepConfig = {
    content: ReactNode
  } & Partial<ComponentProps<typeof BaseStepper>>

  const steps: StepConfig[] = [
    {
      title: t('stepper.title'),
      content: <Step1 />,
      onClickNext: goToNextStep,
    },
    {
      title: t('stepper.title'),
      content: <Step2 />,
      onClickNext: createPassword,
    },
    {
      content: <Step3 success={success} />,
      hideBackButton: true,
      nextButtonColor: 'primary',
      nextButtonVariant: 'text',
      nextButtonText: success
        ? t('feedback.success.button')
        : t('feedback.error.button'),
      onClickNext: success
        ? () => window.alert('Congratulations')
        : () => setActiveStep(0),
    },
  ]

  return (
    <BaseStepper
      className="max-w-3xl my-4 mx-auto"
      activeStep={activeStep}
      title={steps[activeStep].title}
      length={steps.length}
      onClickBack={goToPreviousStep}
      onClickNext={steps[activeStep].onClickNext}
      disabledBack={loading}
      loadingNextButton={loading}
      hideBackButton={steps[activeStep].hideBackButton}
      nextButtonColor={steps[activeStep].nextButtonColor}
      nextButtonVariant={steps[activeStep].nextButtonVariant}
      nextButtonText={steps[activeStep].nextButtonText}
    >
      {steps[activeStep].content}
    </BaseStepper>
  )
}
