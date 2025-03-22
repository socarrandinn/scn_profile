import { SkillCircularProgress } from '@/components/core/skill-circular-progress'
import SectionHeader from '@/components/core/section-header'
import NestIcon from '@/components/icons/services/nest-icon'
import ReactIcon from '@/components/icons/services/react-icon'
import { Check, CodeXml, Languages, List, TabletSmartphone } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import SkillLinealProgress from '@/components/core/skill-lineal-progress'
import { backendSkills, frontendSkills, mobileSkills } from '@/constants/skill'
import { LanguageRating } from '@/components/core/language-rating'

type LanguageRating = {
  name: string, level: number
}
const SkillsContent = () => {
  const { t } = useTranslation('resumen')
  const services = t('knowledge', { returnObjects: true }) as string[]
  const language = t('language', { returnObjects: true }) as LanguageRating[]


  return (
    <section className='grid grid-cols-1 md:grid-cols-2 py-4 gap-4'>
      <article>
        <SectionHeader icon={<CodeXml />} title='resumen:skills.code' />
        <div className='grid grid-cols-2 gap-2 md:gap-x-4 md:gap-y-6 py-8'>
          <SkillCircularProgress skill='Reactjs / Typescript' percentage={95} size={90} />
          <SkillCircularProgress skill='Nextjs / Typescript' percentage={90} size={90} />
          <SkillCircularProgress skill='MongoDB / PostgreSQL' percentage={75} size={90} />
          <SkillCircularProgress skill='Tailwind / Mui-material' percentage={85} size={90} />
          <SkillCircularProgress skill='React Native' percentage={60} size={90} />
          <SkillCircularProgress skill='Nestjs / API' percentage={80} size={90} />
        </div>
      </article>
      <article >
        <SectionHeader icon={<List />} title='resumen:skills.knowledge' />
        <div className="w-full py-8 px-2 flex justify-center items-start h-full">
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-3 text-white">
                <span className="text-amber-500 mt-0.5 flex-shrink-0">
                  <Check size={18} />
                </span>
                <span className="text-md font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
      <article>
        <SectionHeader icon={<ReactIcon />} title='resumen:skills.frontend' />
        <ul className='w-full gap-4 flex flex-col my-5  px-2'>
          {frontendSkills?.map((skill, index) => (
            <li key={index} className="flex items-start gap-3 ">
              <SkillLinealProgress percent={skill?.percentage} skill={skill?.name} />
            </li>
          ))}
        </ul>
      </article>
      <article>
        <SectionHeader icon={<NestIcon />} title='resumen:skills.backend' />
        <ul className='w-full gap-4 flex flex-col my-5 px-2'>
          {backendSkills?.map((skill, index) => (
            <li key={index} className="flex items-start gap-3 ">
              <SkillLinealProgress percent={skill?.percentage} skill={skill?.name} />
            </li>
          ))}
        </ul>
      </article>
      <article>
        <SectionHeader icon={<TabletSmartphone />} title='resumen:skills.mobile' />
        <ul className='w-full gap-4 flex flex-col my-5 px-2'>
          {mobileSkills?.map((skill, index) => (
            <li key={index} className="flex items-start gap-3 ">
              <SkillLinealProgress percent={skill?.percentage} skill={skill?.name} />
            </li>
          ))}
        </ul>
      </article>
      <article>
        <SectionHeader icon={<Languages />} title='resumen:skills.languages' />
        <ul className='w-full gap-4 flex flex-col my-5 px-2'>
          {language?.map((skill, index) => (
            <li key={index} className="flex items-start gap-3 ">
              <LanguageRating name={skill?.name} level={skill?.level} />
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default SkillsContent