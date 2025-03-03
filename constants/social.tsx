import { ISocial } from "@/definitions/Profile"
import Github from "@/components/icons/social/github"
import GitLab from "@/components/icons/social/gitlab"
import Instagram from "@/components/icons/social/instagram"
import WhatsApp from "@/components/icons/social/whatsApp"
import { XIcon } from "lucide-react"


export const socials: ISocial[] = [
  {
    icon: <WhatsApp />,
    href: '',
    label: 'WhatsApp'
  },
  {
    icon: <Instagram />,
    href: '',
    label: 'Instagram'
  },
  {
    icon: <Github />,
    href: '',
    label: 'Github'
  },
  {
    icon: <GitLab />,
    href: '',
    label: 'GitLab'
  },
  {
    icon: <XIcon />,
    href: '',
    label: 'XIcon'
  },

]