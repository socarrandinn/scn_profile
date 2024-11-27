import { SvgIcon, SvgIconProps } from '@mui/material';

export const SupplierIcon = (props: SvgIconProps) => {
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
        className='icon icon-supplier icons-supplier-outline icon-supplier-packages'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z' />
        <path d='M2 13.5v5.5l5 3' />
        <path d='M7 16.545l5 -3.03' />
        <path d='M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z' />
        <path d='M12 19l5 3' />
        <path d='M17 16.5l5 -3' />
        <path d='M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5' />
        <path d='M7 5.03v5.455' />
        <path d='M12 8l5 -3' />
      </svg>
    </SvgIcon>
  );
};
