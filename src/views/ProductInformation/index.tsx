import { createElement } from 'react'
import img1 from '../../assets/img/group.svg'
import img2 from '../../assets/img/group-3.svg'
import step from './step1.png'
import { useTranslation } from 'react-i18next'

export default function Step1() {
  const { t } = useTranslation()

  const cards = [
    {
      key: 'card1',
      image: img1,
      text: t('productInformation.card1'),
    },
    {
      key: 'card2',
      image: img2,
      text: t('productInformation.card2'),
    },
  ]

  const infoSections = [
    {
      key: 'howItWorks',
      title: t('productInformation.howItWorks.title'),
      content: t('productInformation.howItWorks.content'),
    },
    {
      key: 'whichData',
      title: t('productInformation.whichData.title'),
      content: t('productInformation.whichData.content'),
    },
  ]

  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        {cards.map(({ image, text, key }) => (
          <div key={key} className="flex flex-col">
            <div className="flex justify-center">{createElement(image)}</div>
            <p className="font-semibold text-center">{text}</p>
          </div>
        ))}
      </div>
      {infoSections.map(({ title, content, key }) => (
        <section key={key} className="mt-10">
          <h3 className="font-bold">{title}</h3>
          <p>{content}</p>
        </section>
      ))}
    </>
  )
}
