import { SvgIcon, SvgIconProps } from '@mui/material';

export const LogisticIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icon icon-logistic icons-logistic-outline icon-logistic-truck'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5' />
      </svg>
    </SvgIcon>
  );
};
