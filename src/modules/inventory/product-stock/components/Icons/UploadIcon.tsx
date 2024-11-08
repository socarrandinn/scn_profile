import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const UploadIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width={21} height={21} viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.887 6.918a3.217 3.217 0 01-3.218-3.21V1.51l5.685 5.408h-2.467zM12.13 11.97a.803.803 0 01-1.14-.001l-1.146-1.151v4.549a.808.808 0 11-1.614 0v-4.55l-1.145 1.152a.808.808 0 01-1.144-1.14l2.524-2.537a.804.804 0 011.145 0l2.522 2.537a.807.807 0 01-.002 1.141zm7.735-4.862c0-.043 0-.076-.011-.119a61.966 61.966 0 00-.097-.57.554.554 0 00-.161-.302L13.493.302a.493.493 0 00-.29-.14c-.184-.022-.378-.044-.571-.065a.366.366 0 00-.108-.01A23.845 23.845 0 0010.49 0C3.43 0 .923 2.746.923 10.5.923 18.243 3.43 21 10.49 21c7.07 0 9.578-2.757 9.578-10.5 0-1.292-.065-2.412-.204-3.392z'
          fill='#2B3445'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(UploadIcon);
