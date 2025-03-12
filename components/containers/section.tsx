'use client'
import React, { PropsWithChildren } from 'react'
import { VerticalNav } from './navbar'
import ProfileSummary from './profile-summary'

const Section = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex flex-col lg:flex-row container gap-2 md:gap-0 h-auto lg:max-h-[92vh]'>
      <VerticalNav />
      <ProfileSummary />
      {children}
    </div>
  )
}

export default Section