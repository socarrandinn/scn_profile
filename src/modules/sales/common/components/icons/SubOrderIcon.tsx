import { SvgIcon, SvgIconProps } from '@mui/material';

export const SubOrderIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'>
        <path
          d='M6.073 1.445L3.904 4.337V14.46a1.446 1.446 0 001.446 1.446h10.122a1.446 1.446 0 001.446-1.446V4.337L14.75 1.445H6.073zM3.904 4.338h13.014M13.302 7.23a2.892 2.892 0 01-5.784 0'
          // stroke='#2B3445'
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <g clipPath='url(#clip0_2690_8172)'>
          <path
            d='M12.363 18.581H2.747a1.374 1.374 0 01-1.374-1.373V7.592'
            // stroke='#2B3445'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_2690_8172'>
            <path fill='#fff' transform='translate(0 3.47)' d='M0 0H16.4842V16.4842H0z' />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
