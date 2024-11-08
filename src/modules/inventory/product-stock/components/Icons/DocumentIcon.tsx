import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const DocumentIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width={22} height={25} viewBox='0 0 22 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16.244.879A3 3 0 0014.122 0H5.84C2.25 0-.001 2.82-.001 6.822v10.8c0 4 2.24 6.822 5.84 6.822h10.309c3.599 0 5.851-2.822 5.851-6.823v-10.8a.459.459 0 00-.136-.323l-5.62-5.62z'
          fill='#2B3445'
        />
        <path
          d='M6.518 13.475h9.777M6.518 8.963h5.265M6.518 17.988h9.777'
          stroke='#E7E8EA'
          strokeWidth={1.84615}
          strokeLinecap='round'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.667 1.629l.12 4.608a1 1 0 00.974.974l4.608.12-5.702-5.702z'
          fill='#E7E8EA'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(DocumentIcon);
