import { SvgIcon, SvgIconProps } from '@mui/material';

export const NotPaidOrderIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'>
        <g /* stroke='#2B3445' */ strokeLinecap='round' strokeLinejoin='round'>
          <path d='M3.5 19.25h12.25a1.75 1.75 0 001.75-1.75V6h-14v3.75' strokeWidth={1.5} />
          <path d='M2 15.176h4.25M4.074 17.35l2.175-2.175L4.074 13' strokeWidth={1.24286} />
          <path
            d='M13.667 9.334a3.333 3.333 0 01-6.667 0M3.5 6c.5-.5 2-3.334 2-3.334h10L17.5 6M3.5 6H17'
            strokeWidth={1.5}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
