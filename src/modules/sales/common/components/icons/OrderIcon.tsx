import { SvgIcon, SvgIconProps } from '@mui/material';

export const OrderIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'>
        <g /* stroke='#2B3445'  */ strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M5 1.666L2.5 4.999v11.667a1.667 1.667 0 001.667 1.667h11.666a1.666 1.666 0 001.667-1.667V4.999L15 1.666H5zM2.5 5h15M13.333 8.334a3.333 3.333 0 01-6.667 0' />
        </g>
      </svg>
    </SvgIcon>
  );
};
