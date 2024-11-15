import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const DocumentListIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 26 30' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'>
        <path
          clipRule='evenodd'
          d='M16.994 2.03H7.292A5.571 5.571 0 001.7 7.466v15.624a5.583 5.583 0 005.457 5.703c.045 0 .089.002.134 0h11.65a5.668 5.668 0 005.439-5.703V9.724l-7.387-7.695z'
          // stroke='#fff'
          strokeWidth={2.1875}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16.61 2.012v4.242c0 2.07 1.674 3.75 3.744 3.755h4.018M16.34 20.401H8.465M13.355 14.926H8.461'
          // stroke='#fff'
          strokeWidth={2.1875}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(DocumentListIcon);
