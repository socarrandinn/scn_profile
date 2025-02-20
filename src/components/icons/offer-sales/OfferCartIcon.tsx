import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react';

const OfferCartIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox='0 0 27 23' fill='none' stroke='currentColor' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.107 20.044a1.541 1.541 0 11-3.083-.006 1.541 1.541 0 013.083.006zM18.326 20.044a1.541 1.541 0 11-3.082-.006 1.541 1.541 0 013.082.006z'
          fill='currentColor'
          // stroke='#fff'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          clipRule='evenodd'
          d='M23.942 5.12H9.078l-1.03 8.235c0 1.137.922 2.059 2.06 2.059l11.48-1.177c.724 0 1.394-.38 1.765-1l2.353-5a2.059 2.059 0 00-1.764-3.118z'
          // stroke='#fff'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.212 7.719a1 1 0 100-2v2zM1 5.719a1 1 0 000 2v-2zm4.212 5.431a1 1 0 100-2v2zm-1.37-2a1 1 0 100 2v-2zm4.266-3.79a1 1 0 101.94-.484l-1.94.484zm-.013-4.187l.97-.242-.002-.006-.968.248zM7.87 1v1h.005L7.87 1zM3.94 0a1 1 0 100 2V0zm1.271 5.719H1v2h4.212v-2zm0 3.431h-1.37v2h1.37v-2zm4.837-4.274L9.065.93l-1.94.484.983 3.945 1.94-.484zM9.063.925A1.23 1.23 0 007.863 0l.012 2a.77.77 0 01-.75-.578L9.064.925zM7.87 0H3.94v2H7.87V0z'
          fill='currentColor'
        />
      </svg>
    </SvgIcon>
  );
};

export default memo(OfferCartIcon);
