import { SvgIcon, SvgIconProps } from '@mui/material';

const DiscountIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 19 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          clipRule='evenodd'
          d='M15.956 14.934v-1.63c0-.403.16-.79.446-1.076l1.152-1.152a1.522 1.522 0 000-2.152l-1.152-1.152a1.522 1.522 0 01-.446-1.076v-1.63c0-.841-.68-1.522-1.521-1.522h-1.63c-.405 0-.791-.16-1.077-.446l-1.152-1.152a1.522 1.522 0 00-2.152 0L7.272 3.098a1.521 1.521 0 01-1.076.446h-1.63a1.522 1.522 0 00-1.522 1.522v1.63c0 .403-.16.79-.446 1.076L1.446 8.924a1.522 1.522 0 000 2.152l1.152 1.152c.285.286.446.673.446 1.076v1.63c0 .84.68 1.521 1.521 1.521h1.63c.404 0 .791.16 1.077.446l1.152 1.152a1.522 1.522 0 002.152 0l1.152-1.152a1.522 1.522 0 011.076-.446h1.63a1.522 1.522 0 001.522-1.521z'
          stroke='#72B62F'
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6.2 8.35A1.167 1.167 0 117.85 6.7 1.167 1.167 0 016.2 8.35zM11.15 13.3a1.167 1.167 0 111.65-1.65 1.167 1.167 0 01-1.65 1.65z'
          fill='#72B62F'
        />
        <path d='M12.8 6.7l-6.602 6.603' stroke='#72B62F' strokeWidth={1.5} strokeLinecap='round' />
      </svg>
    </SvgIcon>
  );
};

export default DiscountIcon;
