'use client'
import PageContainer from '@/components/containers/page-container' 
import TransTypography from '@/components/core/trans-typography'
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
          <PageHeader variant='compuse' title={'about-me:my_service.title'} className='fade-line-bottom' />
      <CardContent>
          <p>
            Curae arcu elit molestie consequat imperdiet sociosqu consectetur. Ornare nisi massa class ultricies hac dictumst porta letius consectetuer nisl diam. Ornare facilisis pharetra integer sodales class. Fusce ullamcorper nullam interdum magna lacus. Ornare lobortis dictumst porttitor justo venenatis mattis. Facilisis molestie mus ultrices aliquam scelerisque lorem vehicula dapibus si libero senectus. Lacinia euismod potenti pharetra suscipit faucibus urna tristique torquent erat eleifend feugiat. Tristique nascetur morbi ultricies phasellus orci iaculis ultrices mi sed inceptos dapibus.

            Consequat dis vulputate elementum ex risus. Bibendum habitant facilisis sodales penatibus sapien. Fames pede erat sapien eros curae sagittis aptent vehicula tempus. Aliquam sapien ipsum netus praesent vestibulum pharetra tortor consequat torquent a mattis. Inceptos dui aliquam placerat vel sapien consectetur venenatis vitae ante ornare commodo. Ultricies tristique aliquet proin praesent cursus elementum malesuada et dui cubilia.

            Rutrum est pretium phasellus porta aliquam amet nostra primis. Neque curae facilisi maecenas consectetur euismod. Congue bibendum in dignissim ullamcorper sollicitudin himenaeos. Hendrerit sociosqu vivamus iaculis tellus ultricies. Porta vel malesuada tellus litora orci pellentesque interdum laoreet. Sociosqu facilisis senectus pellentesque lorem himenaeos purus sit netus aliquam per.

            Velit interdum vestibulum ultrices integer odio consequat pellentesque. Laoreet mi tortor lacinia at libero sit. Commodo penatibus platea auctor accumsan enim vitae viverra congue risus venenatis felis. Faucibus neque aptent condimentum porta massa vulputate ornare. Bibendum ipsum vel ornare efficitur elit venenatis nunc. Scelerisque sagittis potenti vitae ad inceptos habitasse sodales placerat. Si luctus egestas odio mus vulputate lacinia ultrices taciti ad torquent leo. Purus conubia faucibus letius aliquet elementum.

            Arcu diam lacus habitant nec vel condimentum commodo tincidunt taciti. Nunc ante pharetra neque inceptos primis molestie quam hendrerit. Arcu ad tempus commodo feugiat ante taciti sollicitudin faucibus facilisis efficitur posuere. Consectetuer platea nunc inceptos letius orci quis ad porttitor non gravida velit. Consequat fusce fermentum finibus tincidunt magna et viverra potenti sagittis odio. Nec porttitor habitant id phasellus inceptos.

            Lacus interdum purus montes posuere ultrices pede platea mollis. Augue at nostra dapibus cubilia ac sagittis. Sociosqu et vulputate fames eleifend pharetra enim. Mauris purus ante amet eu porttitor.

            In hac viverra ex quam elementum tincidunt. Sodales class facilisi leo penatibus tristique nam mus. Sem condimentum erat mi ornare facilisis sit euismod cras sodales. Proin vehicula tellus suscipit primis tortor potenti. Porttitor amet ultricies urna suscipit pede. Auctor elit id fusce maecenas habitant duis letius justo nostra malesuada.

            Dictumst ante nisi tellus semper dolor lorem adipiscing convallis vehicula. Montes non letius ridiculus praesent sodales est consequat auctor. Hendrerit netus tortor faucibus montes et fames fermentum. Erat euismod class magna pulvinar pharetra mi sollicitudin felis luctus maecenas habitant. Metus donec ridiculus senectus sem eget lorem ultrices pellentesque arcu mi pulvinar. Aptent vestibulum non sapien neque dictum augue. Tellus nisi vehicula aliquam purus parturient ipsum. Ultrices quisque maecenas urna hac ad tellus.

            Dapibus interdum accumsan nascetur lacinia duis finibus laoreet arcu urna. Vel urna id ligula suscipit elit libero nibh. Potenti nascetur vitae egestas habitant dis. Vitae nulla rutrum fringilla aliquam urna. Congue per proin augue integer felis.
          </p>
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