import { SvgIcon, SvgIconProps } from '@mui/material';

export const AudiLogIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'>
        <g /* stroke='#2B3445' */ strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M12.25 1.75v3.5A1.75 1.75 0 0014 7h3.5' />
          <path d='M3.735 18.375a1.75 1.75 0 001.51.875H15.75a1.75 1.75 0 001.75-1.75V6.125L13.125 1.75H5.25A1.75 1.75 0 003.5 3.5v2.625M7.875 15.75l-1.313-1.313' />
          <path d='M4.375 14.875a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25z' />
        </g>
      </svg>
    </SvgIcon>
  );
};
