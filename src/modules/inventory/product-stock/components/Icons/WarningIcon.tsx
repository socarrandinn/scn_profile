import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const WarningIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width={25} height={24} viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M22.652 18l-8-14a2 2 0 00-3.48 0l-8 14a2 2 0 001.75 3h16a2 2 0 001.73-3zM12.922 9v4M12.922 17h.01'
          stroke='#F3F3F3'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(WarningIcon);
