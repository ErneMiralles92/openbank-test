import BaseButton from '@/components/ui/BaseButton'
import { useTranslation } from 'react-i18next'

export default function TranslateButton() {
  const { i18n } = useTranslation()
  const isSpanish = i18n.language === 'es'
  const languages = isSpanish ? ['ES', 'EN'] : ['EN', 'ES']
  return (
    <BaseButton
      variant="text"
      color="primary"
      onClick={() => i18n.changeLanguage(isSpanish ? 'en' : 'es')}
    >
      {
        <>
          <span>{languages[0]}</span>
          <span className="px-2">{'<->'}</span>
          <span>{languages[1]}</span>
        </>
      }
    </BaseButton>
  )
}
