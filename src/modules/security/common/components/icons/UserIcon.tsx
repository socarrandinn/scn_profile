import { SvgIcon, SvgIconProps } from '@mui/material';

export const UserIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icon icon-users icons-users-outline icon-users-user-shield'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M6 21v-2a4 4 0 0 1 4 -4h2' />
        <path d='M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z' />
        <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
      </svg>
    </SvgIcon>
  );
};
