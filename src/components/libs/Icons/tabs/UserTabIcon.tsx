import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const UserTabIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      >
        <path d='M0 0h24v24H0z' stroke='none' />
        <path d='M5 7a4 4 0 108 0 4 4 0 10-8 0M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.85' />
      </svg>
    </SvgIcon>
  );
};

export default memo(UserTabIcon);
