import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const ReportSearchIcon = (props: SvgIconProps) => {
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
        className='icon icon-tabler icons-tabler-outline icon-tabler-report-search'
      >
        <path d='M0 0h24v24H0z' stroke='none' />
        <path d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h5.697M18 12V7a2 2 0 00-2-2h-2' />
        <path d='M8 5a2 2 0 012-2h2a2 2 0 012 2v0a2 2 0 01-2 2h-2a2 2 0 01-2-2zM8 11h4M8 15h3M14 17.5a2.5 2.5 0 105 0 2.5 2.5 0 10-5 0M18.5 19.5L21 22' />
      </svg>
    </SvgIcon>
  );
};

export default memo(ReportSearchIcon);
