import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const GeneralTabIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' strokeWidth={1.5} stroke='currentColor'>
        <path
          d='M19.5 3h-14a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z'
          // stroke='#65BE46'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.5 3v8l3-3 3 3V3'
          /* stroke='#65BE46' */
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(GeneralTabIcon);
