'use client'
import PageContainer from '@/components/containers/page-container'
import ExperienceContainer from '@/components/sections/experience/experience-container'
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
    </PageContainer>
  )
}

export default AboutMe

