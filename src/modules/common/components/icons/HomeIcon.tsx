import { SvgIcon, SvgIconProps } from '@mui/material';

export const HomeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g
          fillRule='evenodd'
          clipRule='evenodd'
          stroke='snow'
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M1 4.5C1 1.875 1.028 1 4.5 1S8 1.875 8 4.5 8.011 8 4.5 8 1 7.125 1 4.5zM12 4.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5 3.5S12 7.125 12 4.5zM1 15.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5 3.5S1 18.125 1 15.5zM12 15.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5 3.5-3.5-.875-3.5-3.5z' />
        </g>
      </svg>
    </SvgIcon>
  );
};
