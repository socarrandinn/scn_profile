import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import ProfileSocialNetwork from './profile-social-network'

import { TypingTitle } from './typed-titles'
import { profileRoles } from '@/constants/profile'
const ProfileSummary = () => {


  return (
    <Card className='min-w-[480px] min-h-[670px] relative p-0 overflow-hidden' >
      <Image src={'/images/profile/bg-profile.webp'} className='aspect-[9/6] bg-contain' fill alt={'profile'} />

      <Card className='mt-auto h-[45%] z-10 rounded-b-none ovalo flex flex-col items-center justify-start'>

        {/* image profile */}
        <div className='profile-avatar -mt-32'>
          <Avatar className='w-32 h-32 border-2 border-card scale'>
            <AvatarImage src="/images/profile/avatar.webp" />
            <AvatarFallback className='bg-card'>SCN</AvatarFallback>
          </Avatar>
        </div>

        {/* name */}
        <h1 className='font-bold text-color text-4xl leading-1 mt-4'>Silvio Carrandi</h1>
        <TypingTitle texts={profileRoles} />

        <ProfileSocialNetwork />


      </Card>
    </Card>
  )
}

export default ProfileSummary