'use client'
import React, { PropsWithChildren } from 'react'
import { VerticalNav } from './navbar'
import ProfileSummary from './profile-summary'
import NavarMobile from './navbar-mobile'

const Section = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex flex-col lg:flex-row container gap-3 md:gap-0 h-auto lg:max-h-[92vh] mb-5 md:mb-0'>
      <VerticalNav />
      <NavarMobile />
      <ProfileSummary />
      {children}
    </div>
  )
}

export default Section