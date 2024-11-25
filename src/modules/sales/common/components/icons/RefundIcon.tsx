import { SvgIcon, SvgIconProps } from '@mui/material';

export const RefundIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'>
        <g /* stroke='#2B3445' */ strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M16.625 6.125V3.5a.875.875 0 00-.875-.875H4.375a1.75 1.75 0 100 3.5H17.5a.875.875 0 01.875.875v3.5m0 0H15.75a1.75 1.75 0 000 3.5h2.625a.875.875 0 00.875-.875v-1.75a.875.875 0 00-.875-.875z' />
          <path d='M2.625 4.375v12.25a1.75 1.75 0 001.75 1.75H17.5a.875.875 0 00.875-.875V14M11 12.5H6' />
          <path d='M8.5 10L6 12.5 8.5 15' />
        </g>
      </svg>
    </SvgIcon>
  );
};
