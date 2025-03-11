import { SvgIcon, SvgIconProps } from '@mui/material';

export const DispatchIcon = (props: SvgIconProps) => {
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
      >
        <path d='M0 0h24v24H0z' stroke='none' />
        <path d='M12 21l-8-4.5v-9L12 3l8 4.5V12M12 12l8-4.5M12 12v9M12 12L4 7.5M15 18h7M19 15l3 3-3 3' />
      </svg>
    </SvgIcon>
  );
};
