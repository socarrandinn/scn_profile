import { SvgIcon, SvgIconProps } from '@mui/material';

export const OfferIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'>
        <g /* stroke='#2B3445' */ strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M1.75 7.875a2.625 2.625 0 010 5.25v1.75a1.75 1.75 0 001.75 1.75h14a1.75 1.75 0 001.75-1.75v-1.75a2.625 2.625 0 010-5.25v-1.75a1.75 1.75 0 00-1.75-1.75h-14a1.75 1.75 0 00-1.75 1.75v1.75zM8.05 8.05h.01M12.69 8.314L8.314 12.69M12.863 12.953h.009' />
        </g>
      </svg>
    </SvgIcon>
  );
};
