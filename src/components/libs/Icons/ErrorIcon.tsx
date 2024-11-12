import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const ErrorIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width={21} height={21} viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx={10.5} cy={10.5} r={10.5} fill='#F84842' />
        <path
          d='M10.875 10.014L13.888 7l.861.86-3.014 3.015 3.014 3.013-.86.861-3.014-3.014L7.86 14.75 7 13.89l3.014-3.014L7 7.86 7.86 7l3.015 3.014z'
          fill='#fff'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(ErrorIcon);
