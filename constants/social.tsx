import { ISocial } from "@/definitions/Profile";
import Github from "@/components/icons/social/github";
import GitLab from "@/components/icons/social/gitlab";
import Instagram from "@/components/icons/social/instagram";
import WhatsApp from "@/components/icons/social/whatsApp";

export const socials: ISocial[] = [
  {
    icon: <WhatsApp />,
    href: "https://wa.me/5354260322",
    label: "WhatsApp",
  },
  {
    icon: <Instagram />,
    href: "https://www.instagram.com/socarrandin/",
    label: "Instagram",
  },
  {
    icon: <Github />,
    href: "https://github.com/socarrandinn",
    label: "Github",
  },
  {
    icon: <GitLab />,
    href: "https://gitlab.com/socarrandinn",
    label: "GitLab",
  },
];
