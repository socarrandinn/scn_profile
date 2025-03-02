import React, { PropsWithChildren } from 'react'
import { VerticalNav } from './navbar'
import ProfileSummary from './profile-summary'

const Section = ({children}:PropsWithChildren) => {
  return (
    <div className='flex flex-row container'>
      <VerticalNav />
      <ProfileSummary />
      {children}
    </div>
  )
}

export default Section