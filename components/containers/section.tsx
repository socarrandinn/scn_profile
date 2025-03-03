import React, { PropsWithChildren } from 'react'
import { VerticalNav } from './navbar'
import ProfileSummary from './profile-summary'

const Section = ({children}:PropsWithChildren) => {
  return (
    <div className='flex flex-col md:flex-row container gap-2 md:gap-0'>
      <VerticalNav />
      <ProfileSummary />
      {children}
    </div>
  )
}

export default Section