import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const InventoryTabIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' strokeWidth={1.5} stroke='currentColor'>
        <path
          d='M1 6l4.41-4.41A2 2 0 016.83 1h8.34a2 2 0 011.42.59L21 6M3 11v8a2 2 0 002 2h12a2 2 0 002-2v-8'
          // stroke='#65BE46'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14 21v-4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4M1 6h20M21 6v3a2 2 0 01-2 2 2.7 2.7 0 01-1.59-.63.7.7 0 00-.82 0A2.7 2.7 0 0115 11a2.7 2.7 0 01-1.59-.63.7.7 0 00-.82 0A2.7 2.7 0 0111 11a2.7 2.7 0 01-1.59-.63.7.7 0 00-.82 0A2.7 2.7 0 017 11a2.7 2.7 0 01-1.59-.63.7.7 0 00-.82 0A2.7 2.7 0 013 11a2 2 0 01-2-2V6'
          // stroke='#65BE46'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(InventoryTabIcon);
