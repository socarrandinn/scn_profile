import { SvgIcon, SvgIconProps } from '@mui/material';

export const FragileIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icon '
      >
        <path d='M0 0h24v24H0z' stroke='none' />
        <path d='M8 21h8M12 16v5M17 5l1 6c0 .887-.233 1.685-.646 2.37m-2.083 1.886c-.941.48-2.064.744-3.271.744-3.314 0-6-1.988-6-5l.711-4.268' />
        <path d='M10.983 6.959c.329.027.669.041 1.017.041 2.761 0 5-.895 5-2s-2.239-2-5-2c-1.716 0-3.23.346-4.13.872M3 3l18 18' />
      </svg>
    </SvgIcon>
  );
};
