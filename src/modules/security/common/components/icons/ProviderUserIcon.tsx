import { SvgIcon, SvgIconProps } from '@mui/material';

export const ProviderUserIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icon icon-provider-user icons-provider-user-outline icon-provider-user-users-group'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
        <path d='M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1' />
        <path d='M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
        <path d='M17 10h2a2 2 0 0 1 2 2v1' />
        <path d='M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
        <path d='M3 13v-1a2 2 0 0 1 2 -2h2' />
      </svg>
    </SvgIcon>
  );
};
