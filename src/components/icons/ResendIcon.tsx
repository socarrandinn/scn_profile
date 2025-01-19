import { SvgIconProps } from '@mui/material';

export type ISvgIconProps = Omit<SvgIconProps, 'color'> & {
  color?: string;
  strokeWidth?: number;
};

const ResendIcon = (props: ISvgIconProps) => {
  return (
    <svg
      width={props.width || '14'}
      height={props.height || '14'}
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M6.5 2.5L9.5 5.5L6.5 8.5' stroke={props.color || 'black'} strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M0.5 11.5V9.5C0.5 8.43913 0.921427 7.42172 1.67157 6.67157C2.42172 5.92143 3.43913 5.5 4.5 5.5H9.5M10.5 2.5L13.5 5.5L10.5 8.5'
        stroke={props.color || 'black'}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ResendIcon;
