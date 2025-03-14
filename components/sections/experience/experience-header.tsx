'use client'
import TransTypography from '@/components/core/trans-typography'
import { AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { Avatar } from '@radix-ui/react-avatar'
import React, { ReactNode } from 'react'

type Props={
  icon: ReactNode
  title: string
  className?: string
}
const ExperienceHeader = ({icon, title, className}:Props) => {

  return (
    <div className={cn('flex flex-row items-center gap-4 fade-line-bottom pb-4', className)}>
      <Avatar className='w-12 h-12'>
        <AvatarFallback className='text-primary border-primary border bg-transparent'>
          {icon}
        </AvatarFallback>
      </Avatar>
      <TransTypography className='text-xl font-bold uppercase' message={title}/>
    </div>
  )
}

export default ExperienceHeader