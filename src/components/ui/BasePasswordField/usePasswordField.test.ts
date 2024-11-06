import { act, renderHook } from '@testing-library/react'
import { usePasswordField } from './usePasswordField'

describe('usePasswordField', () => {
  it('should return default type and appendIcon', () => {
    const { result } = renderHook(() => usePasswordField())
    expect(result.current).toMatchObject({
      type: 'password',
      appendIcon: 'Eye',
    })
  })

  it('should update the returned type and appendIcon field when calling appendOnClick', async () => {
    const { result } = renderHook(() => usePasswordField())
    expect(result.current).toMatchObject({
      type: 'password',
      appendIcon: 'Eye',
    })

    await act(() => result.current.appendOnClick())

    expect(result.current).toMatchObject({
      type: 'text',
      appendIcon: 'EyeOff',
    })

    await act(() => result.current.appendOnClick())

    expect(result.current).toMatchObject({
      type: 'password',
      appendIcon: 'Eye',
    })
  })
})
