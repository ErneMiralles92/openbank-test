import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

const t = (key: string) => key

vi.mock('@/i18n', async () => {
  return {
    default: {
      t,
    },
  }
})

vi.mock('react-i18next', async importOriginal => {
  const mod = await importOriginal<typeof import('react-i18next')>()
  return {
    ...mod,
    useTranslation: () => ({
      t,
    }),
  }
})

afterEach(() => {
  cleanup()
})
