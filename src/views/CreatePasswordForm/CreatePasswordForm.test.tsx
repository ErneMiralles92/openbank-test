import { fireEvent, render, screen, within } from '@testing-library/react'
import CreatePasswordForm from './CreatePasswordForm'
import { FormProvider } from '@/components/FormProvider'
import userEvent from '@testing-library/user-event'

describe('CreatePasswordForm', () => {
  it('should render form content', () => {
    render(
      <FormProvider>
        <CreatePasswordForm />
      </FormProvider>
    )
    expect(screen.getByText(/form\.subtitlepassword/i)).toBeVisible()

    const inputPassword = screen.getByLabelText(/form\.createpassword/i)
    expect(inputPassword).toBeVisible()
    expect(inputPassword).toHaveAttribute('minLength', '8')
    expect(inputPassword).toHaveAttribute('maxLength', '24')

    const inputRepeatPassword = screen.getByLabelText(/form\.repeatpassword/i)
    expect(inputRepeatPassword).toBeVisible()
    expect(inputRepeatPassword).toHaveAttribute('minLength', '8')
    expect(inputRepeatPassword).toHaveAttribute('maxLength', '24')

    const inputHint = screen.getByRole('textbox', {
      name: /form\.createhint/i,
    })
    expect(inputHint).toBeVisible()
    expect(inputHint).toHaveAttribute('maxLength', '255')
  })
  it('should display validation errors', async () => {
    const typeAndBlur = async (str: string) => {
      await userEvent.type(inputPassword, str)
      await fireEvent.blur(inputPassword)
    }
    render(
      <FormProvider>
        <CreatePasswordForm />
      </FormProvider>
    )
    const inputPassword = screen.getByLabelText(/form\.createpassword/i)
    await fireEvent.focus(inputPassword)
    await fireEvent.blur(inputPassword)
    const inputPasswordWrapper = screen.getByTestId('password')
    expect(
      within(inputPasswordWrapper).getByText('form.errors.required')
    ).toBeVisible()

    await typeAndBlur('pr')
    expect(
      within(inputPasswordWrapper).getByText('form.errors.between')
    ).toBeVisible()

    await typeAndBlur('ueba_1')
    expect(
      within(inputPasswordWrapper).getByText('form.errors.pattern')
    ).toBeVisible()

    await typeAndBlur('{backspace}')
    await typeAndBlur('P')
    expect(
      within(inputPasswordWrapper).getByText('form.errors.pattern')
    ).toBeVisible()

    await typeAndBlur('1')

    expect(
      within(inputPasswordWrapper).queryByText('form.errors.pattern')
    ).not.toBeInTheDocument()
    expect(
      within(inputPasswordWrapper).queryByText('form.errors.between')
    ).not.toBeInTheDocument()
    expect(
      within(inputPasswordWrapper).queryByText('form.errors.required')
    ).not.toBeInTheDocument()
  })
})
