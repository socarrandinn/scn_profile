import { SkillProps } from '@/constants/skill'
import { cn } from '@/lib/utils'
import { Code } from 'lucide-react'



const SkillChip = ({ skill, className }: { skill: SkillProps, className?: string }) => {

  return (
    <div className={cn('flex flex-row p-2 bg-muted rounded-lg items-center gap-2 relative overflow-hidden hover:scale-105 transform-3d duration-500 hover:bg-primary', className)}>
      <span className='rounded-sm p-0.5 bg-gray-100'>
      {skill?.icon || <Code />}
      </span>
      <span className='font-medium uppercase  text-color'>{skill?.name}</span>
    </div>
  )
}

export default SkillChip