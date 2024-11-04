import { render, screen, within } from '@testing-library/react'
import BaseButton from './BaseButton'

describe('BaseButton', () => {
  const label = 'A label'

  it('should render the component', () => {
    render(<BaseButton>{label}</BaseButton>)
    expect(screen.getByRole('button', { name: label })).toBeVisible()
  })

  it('should be disabled', () => {
    render(<BaseButton disabled>{label}</BaseButton>)
    const button = screen.getByRole('button', { name: label })
    expect(button).toBeDisabled()
    expect(button).toHaveClass('cursor-not-allowed')
  })

  it('should be loading', () => {
    render(<BaseButton loading>{label}</BaseButton>)
    const button = screen.getByRole('button')
    expect(within(button).getByRole('img', { name: 'Loader' }))
    expect(button).toBeDisabled()
  })

  it('should display the icon passed in iconName prop', () => {
    render(<BaseButton iconName="ArrowRight">{label}</BaseButton>)
    const button = screen.getByRole('button')
    expect(within(button).getByRole('img', { name: 'ArrowRight' }))
  })

  describe('variants', () => {
    it('should contain "filled" variant classes', () => {
      render(
        <BaseButton variant="filled" color="primary">
          {label}
        </BaseButton>
      )
      const button = screen.getByRole('button', { name: label })
      expect(button).toHaveClass(
        'bg-primary text-white hover:opacity-75 hover:shadow-md focus-visible:shadow-lg'
      )
    })
    it('should contain "text" variant classes', () => {
      render(
        <BaseButton variant="text" color="primary">
          {label}
        </BaseButton>
      )
      const button = screen.getByRole('button', { name: label })
      expect(button).toHaveClass(
        'text-primary hover:bg-black/5 focus-visible:bg-black/10'
      )
    })
  })
})
