import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import BaseInput from '@/components/ui/BaseInput'
import BasePasswordField from '@/components/ui/BasePasswordField'
import { useFormInput } from '@/hooks/useFormInput'
import { passwordValidation, repeatPasswordValidation } from './validation'
import { MAX_LENGTH, MIN_LENGTH } from '@/constants/validation'

export default function CreatePasswordForm() {
  const { t } = useTranslation()

  const passwordInput = useFormInput({
    name: 'password',
    validation: passwordValidation,
  })
  const repeatPasswordInput = useFormInput({
    name: 'repeatPassword',
    validation: repeatPasswordValidation(passwordInput.value),
  })

  const [hint, setHint] = useState('')

  return (
    <form>
      <p>{t('form.subtitlePassword')}</p>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 mt-6 items-end">
        <BasePasswordField
          id="password"
          dataTestId="password"
          label={t('form.createPassword')}
          className="col-span-1 md:col-span-5"
          value={passwordInput.value}
          onChange={passwordInput.onChange}
          onBlur={passwordInput.onBlur}
          error={passwordInput.error}
          required
          minLength={MIN_LENGTH}
          maxLength={MAX_LENGTH}
          ref={passwordInput.ref}
        />
        <BasePasswordField
          id="repeatPassword"
          dataTestId="repeatPassword"
          label={t('form.repeatPassword')}
          className="col-span-1 md:col-span-5"
          value={repeatPasswordInput.value}
          onChange={repeatPasswordInput.onChange}
          onBlur={repeatPasswordInput.onBlur}
          error={repeatPasswordInput.error}
          required
          minLength={MIN_LENGTH}
          maxLength={MAX_LENGTH}
          ref={repeatPasswordInput.ref}
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
        showCounter={true}
      />
    </form>
  )
}
