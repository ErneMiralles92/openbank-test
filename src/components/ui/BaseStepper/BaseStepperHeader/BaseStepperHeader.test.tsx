import { render, screen, within } from '@testing-library/react'
import BaseStepperHeader from './BaseStepperHeader'

const STEP_INDICATOR_TEST_ID = 'step-indicator'

const length = 3

describe('BaseStepperHeader', () => {
  it('should display a number of indicators according to the length prop', () => {
    render(<BaseStepperHeader activeStep={0} length={length} />)

    const stepIndicators = screen.getAllByTestId(STEP_INDICATOR_TEST_ID)
    expect(stepIndicators).toHaveLength(length)
  })

  it('should highlight the completed steps', async () => {
    const checkCompleted = async (indicator: HTMLElement) => {
      expect(
        within(indicator).getByRole('img', { name: 'Checkmark' })
      ).toBeVisible()
      expect(indicator).toHaveClass('bg-primary')
    }
    const { rerender } = render(
      <BaseStepperHeader activeStep={1} length={length} />
    )

    const stepIndicators = screen.getAllByTestId(STEP_INDICATOR_TEST_ID)
    await checkCompleted(stepIndicators[0])

    rerender(<BaseStepperHeader activeStep={2} length={length} />)

    await checkCompleted(stepIndicators[0])
    await checkCompleted(stepIndicators[1])
  })
})
