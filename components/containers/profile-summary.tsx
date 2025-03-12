import React from 'react'
import { Card, CardContent, } from '../ui/card'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import ProfileSocialNetwork from './profile-social-network'

import { TypingTitle } from './typed-titles'
import { profileRoles } from '@/constants/profile'
import ProfileActions from './profile-actions'
const ProfileSummary = () => {


  return (
    <Card className='min-w-full md:min-w-[460px] h-auto relative p-0 overflow-hidden -mr-2 shadow-2xl z-20' >
      <Image src={'/images/profile/bg-profile.webp'} className='aspect-[9/6] bg-contain' fill alt={'profile'} />

      <Card className='mt-auto h-[45%] z-10 rounded-b-none ovalo flex flex-col items-center justify-between py-0'>

        <CardContent className='flex flex-col w-full items-center gap-6'>
          {/* image profile */}
          <div className='profile-avatar -mt-32'>
            <Avatar className='w-32 h-32 border-2 border-card scale'>
              <AvatarImage src="/images/profile/avatar.webp" />
              <AvatarFallback className='bg-card'>SCN</AvatarFallback>
            </Avatar>
          </div>

          {/* name section */}
          <h1 className='font-bold text-color text-4xl leading-1 mt-4'>Silvio Carrandi</h1>
          <TypingTitle texts={profileRoles} className='mb-4' />
          <ProfileSocialNetwork />
        </CardContent>


        {/* actions */}
        <ProfileActions />

      </Card>
    </Card>
  )
}

export default ProfileSummary
