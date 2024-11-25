import { SvgIcon, SvgIconProps } from '@mui/material';

export const WarehouseAreaIcon = (props: SvgIconProps) => {
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
        className='icon icon-building icons-building-outline icon-building-building-warehouse'
      >
        <path d='M0 0h24v24H0z' stroke='none' />
        <path d='M3 21V8l9-4 9 4v13' />
        <path d='M13 13h4v8H7v-6h6' />
        <path d='M13 21v-9a1 1 0 00-1-1h-2a1 1 0 00-1 1v3' />
      </svg>
    </SvgIcon>
  );
};
