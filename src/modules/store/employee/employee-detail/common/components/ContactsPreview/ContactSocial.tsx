import { memo } from 'react';
import { Stack, styled } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ISocialMediaInfo } from 'modules/store/employee/common/interfaces';
import { Link } from 'react-router-dom';

export const DFLLinkStyled = styled(Link)(({ theme }) => ({
  width: '34px',
  fontSize: 16,
  height: '34px',
  borderRadius: '50%',
  // backgroundColor: 'white',
  background: `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, rgba(9,9,121,1) 13%, ${theme.palette.primary.main} 100%)`,
  boxShadow: '0px 3px 6px #00000029',
  opacity: 1,
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  '&:hover': {
    background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, rgba(9,9,121,1) 13%, ${theme.palette.primary.dark} 100%)`,
  },
}));
type SocialIcon = {
  enabledField: keyof ISocialMediaInfo;
  icon: any;
};
const socials: SocialIcon[] = [
  {
    enabledField: 'facebook',
    icon: FacebookIcon,
  },
  {
    enabledField: 'twitter',
    icon: TwitterIcon,
  },
  {
    enabledField: 'instagram',
    icon: InstagramIcon,
  },
];

const sx = {
  fontSize: 16,
  marginTop: 1,
  alignItems: 'center',
};

const sxIcon = {
  fontSize: 18,
  color: 'white',
  width: '100%',
};

type SocialLinkProps = {
  link: string;
  type: string;
  Icon: any;
};

const SocialLink = ({ link, Icon, type }: SocialLinkProps) => (
  <DFLLinkStyled aria-label={type} to={link} className={'flex'} target={'_blank'} rel='noopener noreferrer nofollow'>
    <Icon sx={sxIcon} />
  </DFLLinkStyled>
);

type SocialsProps = {
  social?: ISocialMediaInfo;
  className?: string;
};

const ContactSocial = ({ social, className }: SocialsProps) => {
  const socialsLink = socials.map(({ enabledField, icon }) => {
    if (social?.[enabledField]) {
      return <SocialLink key={enabledField} link={social[enabledField]} Icon={icon} type={enabledField} />;
    }
    return '';
  });

  if (!social) <></>;

  return (
    <Stack direction='row' spacing={2} sx={sx} className={className}>
      {socialsLink}
    </Stack>
  );
};

export default memo(ContactSocial);
