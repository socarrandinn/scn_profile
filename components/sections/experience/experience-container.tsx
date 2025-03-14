
import React from 'react'
import ExperienceHeader from './experience-header'
import BusinessIcon from '@/components/icons/resumen/business-icon'
import SchoolIcon from '@/components/icons/resumen/school-icon'
import TimeLine from '@/components/core/time-line/time-line-content'
import { experiences } from '@/constants/experience'


const ExperienceContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2'>
      <article className=''>
        <ExperienceHeader className='mb-4' icon={<BusinessIcon />} title='resumen:section.experience' />
        <TimeLine items={experiences} />
      </article>

      <article className=''>
        <ExperienceHeader className='mb-4' icon={<SchoolIcon />} title='resumen:section.education' />
        <TimeLine items={experiences} />
      </article>
    </section>
  )
}

export default ExperienceContainer