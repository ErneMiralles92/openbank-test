import BaseStepper from '@/components/ui/BaseStepper'
import Step1 from './views/ProductInformation'
import Step2 from './views/CreatePasswordForm'
import Step3 from './views/Feedback'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useFormContext } from './hooks/useFormContext'

export default function CreatePasswordManager() {
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState(1)
  const { validate } = useFormContext() ?? {}

  const goToPreviousStep = () => {
    setActiveStep(step => step - 1)
  }
  const goToNextStep = () => {
    setActiveStep(step => step + 1)
  }

  const steps = [
    {
      title: t('stepper.title'),
      content: <Step1 />,
      onClickNext: goToNextStep,
    },
    {
      title: t('stepper.title'),
      content: <Step2 />,
      onClickNext: () => {
        const isValid = validate()
        if (!isValid) return
        goToNextStep()
      },
    },
    {
      content: <Step3 />,
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
    >
      {steps[activeStep].content}
    </BaseStepper>
  )
}
