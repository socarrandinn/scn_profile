import { SvgIcon, SvgIconProps } from '@mui/material';

export const LocationIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 28'>
        <path
          data-name='Subtraction'
          d='M11.591 0a11.418 11.418 0 0111.591 11.237c0 8.388-9.6 16.717-11.591 16.717S0 20.659 0 11.237A11.418 11.418 0 0111.591 0z'
          // fill='#90e173'
        />
        <ellipse
          data-name='Ellipse 352'
          cx={5.795}
          cy={5.619}
          rx={5.795}
          ry={5.619}
          transform='translate(5.739 5.992)'
          fill='#fff'
        />
      </svg>
    </SvgIcon>
  );
};
