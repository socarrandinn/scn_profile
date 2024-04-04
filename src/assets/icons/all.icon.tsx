import { SvgIcon, SvgIconProps } from '@mui/material';

const SpaIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_3864_5154" style={{
          maskType: 'alpha'
        }} maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
          <rect width="34" height="34" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3864_5154)">
          <path
            d="M9.94219 24.9714L2.45752 17.4958L3.73248 16.2281L9.94946 22.436L10.4399 21.9455L11.7076 23.2133L9.94219 24.9714ZM16.9783 24.9714L9.50271 17.4958L10.7704 16.2208L16.9783 22.4287L30.2895 9.12656L31.5572 10.3925L16.9783 24.9714ZM16.4879 18.4257L15.2129 17.158L23.2461 9.12476L24.5211 10.3925L16.4879 18.4257Z"
            fill="#0F145B" />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default SpaIcon;
