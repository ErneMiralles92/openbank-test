import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import localeES from './locale/es'
import localeEN from './locale/en'

const resources = {
  es: { translation: localeES },
  en: { translation: localeEN },
}

const { language } = window.navigator
const browserLanguage = language.split('-')[0]

i18n.use(initReactI18next).init({
  fallbackLng: 'es',
  supportedLngs: ['es', 'en'],
  resources,
  lng: browserLanguage,
})

export default i18n
