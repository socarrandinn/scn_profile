import { SvgIcon, SvgIconProps } from '@mui/material';

export const ClockIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icon'
        strokeWidth={1.5}
      >
        <path d='M0 0h24v24H0z' stroke='none' />
        <path d='M3 12a9 9 0 1018 0 9 9 0 00-18 0' />
        <path d='M12 7v5l3 3' />
      </svg>
    </SvgIcon>
  );
};
