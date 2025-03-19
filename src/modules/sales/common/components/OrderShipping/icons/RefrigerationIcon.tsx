import { SvgIcon, SvgIconProps } from '@mui/material';

export const RefrigerationIcon = (props: SvgIconProps) => {
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
        <path d='M8 16a3 3 0 01-3 3M16 16a3 3 0 003 3M12 16v4M3 7a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2z' />
        <path d='M7 13v-3a1 1 0 011-1h8a1 1 0 011 1v3' />
      </svg>
    </SvgIcon>
  );
};
