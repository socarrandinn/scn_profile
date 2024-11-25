import { SvgIcon, SvgIconProps } from '@mui/material';

export const WarehouseIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'>
        <g /* stroke='#2B3445' */ strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M17.417 6.61v9.223a1.583 1.583 0 01-1.583 1.583H3.167a1.583 1.583 0 01-1.583-1.583V6.61a1.583 1.583 0 01.997-1.464l6.334-2.534c.376-.15.795-.15 1.171 0l6.334 2.534a1.583 1.583 0 01.997 1.464zM4.75 14.25h9.5M4.75 11.084h9.5' />
          <path d='M14.25 7.916h-9.5v9.5h9.5v-9.5z' />
        </g>
      </svg>
    </SvgIcon>
  );
};
