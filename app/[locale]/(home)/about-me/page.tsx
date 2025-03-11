'use client'
import PageContainer from '@/components/containers/page-container'
import { TransTypography } from '@/components/core/trans-typography'
import ServiceContainer from '@/components/sections/service/service-container'
import { CardContent } from '@/components/ui/card'
import PageHeader from '@/components/ui/page-header'
import { calculeAge } from '@/components/utils/about-me'

import { useTranslation } from 'react-i18next'

const AboutMe = () => {
  const { t } = useTranslation('about-me')
  const age = calculeAge('1990-07-16')

  return (
    <PageContainer title={'about-me:title'} >
      <CardContent>
        <section className='flex flex-col w-full gap-2'>
          <h1 className='font-bold'>{t('aboutMe.hello')}</h1>
          <p className='font-normal text-justify leading-7'>{t('aboutMe.description')}</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-1 mt-2'>
            <AboutMeItem title='about-me:aboutMe.summary.age' value={age} />
            <AboutMeItem title='about-me:aboutMe.summary.residence' value={t('common:country')} />
            <AboutMeItem title='about-me:aboutMe.summary.freelance' value={t('common:country')} />
            <AboutMeItem title='about-me:aboutMe.summary.address' value={t('common:address')} />

          </div>
        </section>
      </CardContent>
      {/* my services */}

      <section className='mt-16 md:mt-20'>
        <PageHeader variant='compuse' title={'about-me:my-service.title'} className='fade-line-bottom' />
        <CardContent>
          <ServiceContainer />
        </CardContent>
      </section>
    </PageContainer>
  )
}

export default AboutMe


type Props = {
  title: string
  value: string | number
}
const AboutMeItem = ({ title, value }: Props) => {

  return (
    <div className='flex flex-row gap-2 items-center'>
      <TransTypography className='uppercase font-bold' message={title} />
      {'... '}
      {value}
    </div>
  )
}