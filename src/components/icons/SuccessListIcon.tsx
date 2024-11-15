import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const SuccessListIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 27 31' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'>
        <path
          clipRule='evenodd'
          d='M17.684 1.348H7.418A5.895 5.895 0 001.5 7.102v16.531a5.908 5.908 0 005.775 6.035c.048 0 .094.002.142 0h12.328a5.997 5.997 0 005.754-6.035V9.49l-7.816-8.141z'
          // stroke='#fff'
          strokeWidth={2.19}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M17.28 1.33V5.82a3.972 3.972 0 003.962 3.973h4.251M20.18 14.996h-5.178'
          // stroke='#fff'
          strokeWidth={2.19}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.287 14.06l1.544 1.544 3.085-3.086M7.287 21.613l1.544 1.544 3.085-3.087'
          // stroke='#fff'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M20.18 22.547h-5.178'
          // stroke='#fff'
          strokeWidth={2.19}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(SuccessListIcon);
