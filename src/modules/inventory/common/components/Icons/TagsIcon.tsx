import { SvgIcon, SvgIconProps } from '@mui/material';

export const TagsIcon = (props: SvgIconProps) => {
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
        className='icon icon-tag icons-tag-outline icon-tag-tags'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M3 8v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.592 -3.592a2.41 2.41 0 0 0 0 -3.408l-5.71 -5.71a2 2 0 0 0 -1.414 -.586h-4.172a2 2 0 0 0 -2 2z' />
        <path d='M18 19l1.592 -1.592a4.82 4.82 0 0 0 0 -6.816l-4.592 -4.592' />
        <path d='M7 10h-.01' />
      </svg>
    </SvgIcon>
  );
};
