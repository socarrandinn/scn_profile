import { SvgIcon, SvgIconProps } from '@mui/material';

export const UserIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'>
        <g /* stroke='#2B3445' */ strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M14 1.75V3.5M15.676 19.25a5.25 5.25 0 10-10.5 0M7 1.75V3.5' />
          <path d='M10.5 14a3.5 3.5 0 100-7 3.5 3.5 0 000 7z' />
          <path d='M16.625 3.5H4.375a1.75 1.75 0 00-1.75 1.75V17.5c0 .966.784 1.75 1.75 1.75h12.25a1.75 1.75 0 001.75-1.75V5.25a1.75 1.75 0 00-1.75-1.75z' />
        </g>
      </svg>
    </SvgIcon>
  );
};
