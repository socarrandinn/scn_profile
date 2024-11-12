import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const PriceTabIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' strokeWidth={1.5} stroke='currentColor'>
        <path
          d='M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10z'
          // stroke='#65BE46'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15 7H9a2 2 0 100 4h4a2 2 0 010 4H7M11 17V5'
          // stroke='#65BE46'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(PriceTabIcon);
