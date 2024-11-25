import { SvgIcon, SvgIconProps } from '@mui/material';

export const ClientGroupIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'>
        <g /* stroke='#fff' */ strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M7.877 13.207c-3.844 0-7.127.581-7.127 2.909s3.263 2.93 7.127 2.93c3.845 0 7.127-.582 7.127-2.909s-3.262-2.93-7.127-2.93zM7.878 9.886A4.568 4.568 0 103.31 5.318a4.551 4.551 0 004.536 4.568h.03z'
          />
          <path d='M17.203 6.67v4.01M19.25 8.674h-4.09' />
        </g>
      </svg>
    </SvgIcon>
  );
};
