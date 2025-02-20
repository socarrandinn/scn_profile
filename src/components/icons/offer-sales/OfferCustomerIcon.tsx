import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const OfferCustomerIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 22 21' fill='none' stroke='currentColor' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
          clipRule='evenodd'
          d='M11 4.166c0 1.749-1.493 3.166-3.333 3.166S4.334 5.915 4.334 4.166C4.334 2.418 5.826 1 7.667 1 9.507 1 11 2.418 11 4.166zM14.333 15.565c0 2.443-2.985 4.434-6.667 4.434C3.983 19.999 1 18.013 1 15.565c0-2.448 2.984-4.432 6.667-4.432s6.666 1.984 6.666 4.432zM18.056 7.12c0 1.05-.896 1.9-2 1.9-1.105 0-2-.85-2-1.9 0-1.049.895-1.9 2-1.9.53 0 1.039.2 1.414.557.375.357.586.84.586 1.344z'
          // stroke='#fff'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M17 18.73c2.02.158 3.8-1.251 4-3.167-.201-1.915-1.98-3.324-4-3.166'
          // stroke='#fff'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(OfferCustomerIcon);
