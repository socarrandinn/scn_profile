import { SvgIcon, SvgIconProps } from '@mui/material';

export const VolumeIcon = (props: SvgIconProps) => {
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
        strokeWidth={1.5}
      >
        <path d='M0 0h24v24H0z' stroke='none' />
        <path d='M21 16.008V7.99a1.98 1.98 0 00-1-1.717l-7-4.008a2.016 2.016 0 00-2 0L4 6.273c-.619.355-1 1.01-1 1.718v8.018c0 .709.381 1.363 1 1.717l7 4.008a2.016 2.016 0 002 0l7-4.008c.619-.355 1-1.01 1-1.718zM12 22V12M12 12l8.73-5.04M3.27 6.96L12 12' />
      </svg>
    </SvgIcon>
  );
};
