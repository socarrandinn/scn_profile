import { SvgIcon, SvgIconProps } from '@mui/material';

export const WeightIcon = (props: SvgIconProps) => {
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
        <path d='M9 6a3 3 0 106 0 3 3 0 10-6 0' />
        <path d='M6.835 9h10.33a1 1 0 01.984.821l1.637 9A1 1 0 0118.802 20H5.198a1 1 0 01-.984-1.179l1.637-9A1 1 0 016.835 9z' />
      </svg>
    </SvgIcon>
  );
};
