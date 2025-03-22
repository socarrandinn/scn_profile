'use client'
import PageContainer from '@/components/containers/page-container'
import ExperienceContainer from '@/components/sections/experience/experience-container'
import QuoteContent from '@/components/sections/skills/quote-content'
import SkillsContent from '@/components/sections/skills/skills-content'
import { CardContent } from '@/components/ui/card'
import PageHeader from '@/components/ui/page-header'


const AboutMe = () => {

  return (
    <PageContainer title={'resumen:title'} >
      <CardContent>
        <ExperienceContainer />
      </CardContent>

      <section className='mt-4 md:mt-8'>
        <PageHeader variant='compuse' title={'resumen:section.skills'} className='fade-line-bottom' />
        <CardContent>
          <SkillsContent />
        </CardContent>
      </section>

      <section className='mt-4 md:mt-8'>
        <PageHeader variant='compuse' title={'resumen:section.quote'} className='fade-line-bottom' />
        <CardContent>
          <QuoteContent autor='Ryan Adlard' rol='Frontend Developer' image='/images/resumen/quote-avatar.webp' quote='Gravida tempor dictumst scelerisque ad volutpat porta sem maximus litora massa nisi natoque lobortis' />
        </CardContent>
      </section>
    </PageContainer>
  )
}

export default AboutMe

