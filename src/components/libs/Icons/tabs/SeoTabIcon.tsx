import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const SeoTabIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 22 19' fill='none' xmlns='http://www.w3.org/2000/svg' strokeWidth={1.5} stroke='currentColor'>
        <path
          d='M10.5 13a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'
          // stroke='#65BE46'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M19 18a2 2 0 002-2V6a2 2 0 00-2-2h-7.9a2 2 0 01-1.69-.9L8.6 1.9A2 2 0 006.93 1H3a2 2 0 00-2 2v13a2 2 0 002 2h16zM12.3 12.3L14 14'
          // stroke='#65BE46'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(SeoTabIcon);
