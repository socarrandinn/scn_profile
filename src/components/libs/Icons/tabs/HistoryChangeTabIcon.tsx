import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const PriceTabIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg' strokeWidth={1.5} stroke='currentColor'>
        <path
          d='M15 21h2a2 2 0 002-2V6l-5-5H5a2 2 0 00-2 2v3'
          // stroke='#65BE46'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13 1v4a2 2 0 002 2h4M7 21A6 6 0 107 9a6 6 0 000 12z'
          // stroke='#65BE46'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.5 16.5L7 15.25V13'
          /* stroke='#65BE46' */ strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(PriceTabIcon);
