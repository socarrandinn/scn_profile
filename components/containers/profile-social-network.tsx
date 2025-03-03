
import { socials } from '@/constants/social'
import { ISocial } from '../../definitions/Profile'

const ProfileSocialNetwork = () => {
  return (
    <div className='[&>svg]:text-color flex flex-row gap-3'>
      {socials?.map(social => <SocialItem key={social?.label} social={social} />)}
    </div>
  )
}

export default ProfileSocialNetwork

type Props = {
  social: ISocial
}
const SocialItem = ({ social }: Props) => {

  return (
    <a className='hover:text-primary hover:[&>svg]:stroke-primary' href={social.href} target="_blank" rel="noopener noreferrer">{social?.icon}</a>
  )
}