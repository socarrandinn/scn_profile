import { SvgIcon, SvgIconProps } from '@mui/material';

const TypeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 17 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          clipRule='evenodd'
          d='M1 11.104A3.791 3.791 0 014.75 7.27h7.5A3.791 3.791 0 0116 11.104v6.387a3.791 3.791 0 01-3.75 3.831h-7.5A3.791 3.791 0 011 17.49v-6.386z'
          stroke='#72B62F'
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          clipRule='evenodd'
          d='M9.362 3.63l.527 2.076.211.703.3-1.181a1.92 1.92 0 012.362-1.438 2.047 2.047 0 011.363 2.49 1.266 1.266 0 01-1.16.993H6.001a2.491 2.491 0 01-2.334-2.034A3.125 3.125 0 015.75 1.43a2.936 2.936 0 013.61 2.2z'
          stroke='#72B62F'
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.83 6.586a.75.75 0 00-1.459-.348l1.459.348zm-1.665.516a.75.75 0 101.459.348l-1.46-.348zm.084.174a.75.75 0 10-1.5 0h1.5zm-1.5 14.05a.75.75 0 001.5 0h-1.5zM9.371 6.239l-.206.864 1.459.348.206-.864-1.459-.348zM7.749 7.276v14.05h1.5V7.277h-1.5z'
          fill='#72B62F'
        />
      </svg>
    </SvgIcon>
  );
};

export default TypeIcon;
