import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const CouponIcon = (props: SvgIconProps) => {
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
        className='icon icon-tabler icons-tabler-outline icon-tabler-ticket'
      >
        <path d='M0 0h24v24H0z' stroke='none' />
        <path d='M15 5v2M15 11v2M15 17v2M5 5h14a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 000-4V7a2 2 0 012-2' />
      </svg>
    </SvgIcon>
  );
};

export default memo(CouponIcon);
