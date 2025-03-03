'use client'
import { useTranslation } from 'react-i18next'
import { CardHeader } from './card'
import { cn } from '@/lib/utils'

type Props = {
  variant?: 'simple' | 'compuse'
  className?: string
  title: string
}
const PageHeader = ({ variant = 'simple', className, title }: Props) => {
   const { t } = useTranslation()
  return (
    <CardHeader
      className={cn(
        'w-full relative',
        variant === 'compuse' && 'cycle',
        className)}
    >
      <p className='text-2xl font-bold w-full z-[1] first-letter:text-primary'>{t(title)}</p>
    </CardHeader>
  )
}

export default PageHeader