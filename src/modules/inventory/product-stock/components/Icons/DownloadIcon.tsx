import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const DownloadIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width={21} height={21} viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.67 3.709a3.217 3.217 0 003.217 3.21h2.467l-5.685-5.41v2.2zm7.183 3.28c.01.043.01.076.01.119.14.98.205 2.1.205 3.392 0 7.743-2.507 10.5-9.578 10.5C3.43 21 .923 18.243.923 10.5.923 2.746 3.43 0 10.49 0c.721 0 1.41.032 2.034.086.032 0 .075 0 .108.01l.57.066c.108.01.215.064.29.14l6.103 5.815c.086.086.14.183.161.301l.097.571zm-13.34 4.98a.807.807 0 00-.571 1.377l2.521 2.536a.804.804 0 001.146 0l2.523-2.536a.808.808 0 00-1.144-1.14l-1.145 1.152v-4.55a.808.808 0 00-1.614 0v4.549l-1.145-1.152a.801.801 0 00-.572-.236z'
          fill='#F3F3F3'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(DownloadIcon);
