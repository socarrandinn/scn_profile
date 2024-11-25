import { SvgIcon, SvgIconProps } from '@mui/material';

export const OrderIssuesIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'>
        <g /* stroke='#2B3445'  */ strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M10.5 19.25a8.75 8.75 0 100-17.5 8.75 8.75 0 000 17.5zM10.5 7v3.5M10.5 14h.009' />
        </g>
      </svg>
    </SvgIcon>
  );
};
