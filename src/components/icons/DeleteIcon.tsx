import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const DeleteIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width={19}
        height={19}
        viewBox='0 0 19 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        stroke='currentColor'
      >
        <path
          d='M14.875 7.523c0 6.315.909 9.17-5.205 9.17-6.115 0-5.187-2.855-5.187-9.17M16.038 5.102H3.319M12.377 5.102s.416-2.965-2.698-2.965c-3.113 0-2.697 2.965-2.697 2.965'
          // stroke='#F84842'
          strokeWidth={1.18125}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(DeleteIcon);
