
import SectionHeader from '@/components/core/section-header'
import { Languages } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageRating } from '@/components/core/language-rating'

import { SkillCodeContent } from './skill-code-content'
import { codingSkills, SkillType, tools, ToolType } from '@/constants/skill'

type LanguageRating = {
  name: string, level: number
}
const SkillsContent = () => {
  const { t } = useTranslation('resumen')
  const language = t('language', { returnObjects: true }) as LanguageRating[]


  return (
    <section className='grid grid-cols-1 md:grid-cols-2 py-4 gap-10'>
      <SkillCodeContent skills={codingSkills} types={Object.keys(SkillType)} title='resumen:skills.code' />
      <SkillCodeContent skills={tools} types={Object.keys(ToolType)} title='resumen:skills.tools' />

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



