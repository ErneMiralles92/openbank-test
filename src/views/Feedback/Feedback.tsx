import BaseIcon from '@/components/ui/BaseIcon'
import { useTranslation } from 'react-i18next'
import type { IconName } from '@/types'

export default function Step3({ success }: { success?: boolean }) {
  const { t } = useTranslation()
  const iconName: IconName = success ? 'CheckmarkColored' : 'Warning'
  const title = success ? 'feedback.success.title' : 'feedback.error.title'
  const subtitle = success
    ? 'feedback.success.subtitle'
    : 'feedback.error.subtitle'

  return (
    <div className="flex">
      <BaseIcon iconName={iconName} color="current" size="xl" />
      <div className="flex flex-col ml-3">
        <h2 className="text-lg font-bold">{t(title)}</h2>
        <span className="text-sm">{t(subtitle)}</span>
      </div>
    </div>
  )
}
