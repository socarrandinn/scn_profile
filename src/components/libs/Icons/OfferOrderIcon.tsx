import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const OfferOrderIcon = (props: SvgIconProps) => {
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
        className='icon icon-tabler icons-tabler-outline icon-tabler-rosette-discount'
      >
        <path d='M0 0h24v24H0z' stroke='none' />
        <path d='M9 15l6-6' />
        <circle cx={9.5} cy={9.5} r={0.5} fill='currentColor' />
        <circle cx={14.5} cy={14.5} r={0.5} fill='currentColor' />
        <path d='M5 7.2A2.2 2.2 0 017.2 5h1a2.2 2.2 0 001.55-.64l.7-.7a2.2 2.2 0 013.12 0l.7.7a2.2 2.2 0 001.55.64h1a2.2 2.2 0 012.2 2.2v1a2.2 2.2 0 00.64 1.55l.7.7a2.2 2.2 0 010 3.12l-.7.7a2.2 2.2 0 00-.64 1.55v1a2.2 2.2 0 01-2.2 2.2h-1a2.2 2.2 0 00-1.55.64l-.7.7a2.2 2.2 0 01-3.12 0l-.7-.7a2.2 2.2 0 00-1.55-.64h-1a2.2 2.2 0 01-2.2-2.2v-1a2.2 2.2 0 00-.64-1.55l-.7-.7a2.2 2.2 0 010-3.12l.7-.7A2.2 2.2 0 005 8.2v-1' />
      </svg>
    </SvgIcon>
  );
};

export default memo(OfferOrderIcon);
