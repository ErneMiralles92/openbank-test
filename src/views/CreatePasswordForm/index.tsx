import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import BaseInput from '@/components/ui/BaseInput'
import BasePasswordField from '@/components/ui/BasePasswordField'
import { useFormInput } from '@/hooks/useFormInput'

export default function CreatePasswordForm() {
  const { t } = useTranslation()

  const passwordInput = useFormInput()
  const repeatPasswordInput = useFormInput()

  const [hint, setHint] = useState('')

  return (
    <>
      <p>{t('form.subtitlePassword')}</p>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 mt-6 items-end">
        <BasePasswordField
          id="password"
          label={t('form.createPassword')}
          className="col-span-1 md:col-span-5"
          value={passwordInput.value}
          onChange={passwordInput.onChange}
        />
        <BasePasswordField
          id="repeatPassword"
          label={t('form.repeatPassword')}
          className="col-span-1 md:col-span-5"
          value={repeatPasswordInput.value}
          onChange={repeatPasswordInput.onChange}
        />
      </div>
      <p className="mt-6">{t('form.subtitleHint')}</p>
      <BaseInput
        id="hint"
        value={hint}
        onChange={event => setHint(event.currentTarget.value)}
        label={t('form.createHint')}
        className="col-span-1 md:col-span-5 mt-4"
        maxLength={255}
      />
    </>
  )
}
