import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const CheckCircleIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
        <g clip-path="url(#clip0_5734_7690)">
          <path d="M20.1654 10.4262V11.2696C20.1642 13.2463 19.5242 15.1697 18.3406 16.7529C17.157 18.3361 15.4934 19.4943 13.5978 20.0548C11.7022 20.6153 9.67619 20.548 7.82196 19.8629C5.96774 19.1779 4.38463 17.9118 3.30874 16.2535C2.23286 14.5953 1.72184 12.6336 1.8519 10.6612C1.98196 8.68875 2.74614 6.8112 4.03045 5.30855C5.31477 3.8059 7.05042 2.75867 8.97854 2.32304C10.9067 1.8874 12.9239 2.08671 14.7295 2.89124" stroke="#72B62F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8.25 10.3542L11 13.1042L20.1667 3.9375" stroke="#72B62F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_5734_7690">
            <rect width="22" height="22" fill="white" transform="translate(0 0.269531)" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default memo(CheckCircleIcon);
