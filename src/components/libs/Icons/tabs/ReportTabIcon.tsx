import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const ReportTabIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' strokeWidth={1.5} stroke='currentColor'>
        <path d='M1 1v18h18' /*  stroke='#65BE46' */ strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        <path
          d='M5 10v5h12V6l-5 5-4-4-3 3z'
          // stroke='#65BE46'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(ReportTabIcon);
