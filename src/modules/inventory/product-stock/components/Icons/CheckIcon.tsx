import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const CheckIcon = (props: SvgIconProps) => {
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
        className='icon'
      >
        <path d='M0 0h24v24H0z' stroke='none' />
        <path d='M5 12l5 5L20 7' />
      </svg>
    </SvgIcon>
  );
};

export default memo(CheckIcon);
