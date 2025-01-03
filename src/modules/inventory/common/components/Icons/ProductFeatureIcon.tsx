import { SvgIcon, SvgIconProps } from '@mui/material';

export const ProductFeatureIcon = (props: SvgIconProps) => {
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
        className='icon icon-feature icons-feature-outline icon-feature-album'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
        <path d='M12 4v7l2 -2l2 2v-7' />
      </svg>
    </SvgIcon>
  );
};
