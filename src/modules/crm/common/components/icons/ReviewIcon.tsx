import { SvgIcon, SvgIconProps } from '@mui/material';

export const ReviewIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'>
        <g /*  stroke="#2B3445"  */ strokeLinecap='round' strokeLinejoin='round'>
          <path
            d='M18.375 13.125a1.75 1.75 0 01-1.75 1.75h-10.5l-3.5 3.5v-14a1.75 1.75 0 011.75-1.75h12.25a1.75 1.75 0 011.75 1.75v8.75z'
            strokeWidth={1.5}
          />
          <path d='M7 8.75h.009M10.5 8.75h.009M14 8.75h.009' strokeWidth={1.75} />
        </g>
      </svg>
    </SvgIcon>
  );
};
