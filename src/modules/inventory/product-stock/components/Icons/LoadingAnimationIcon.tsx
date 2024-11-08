import { SvgIcon, SvgIconProps } from '@mui/material';

const LoadingAnimationIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width={75}
        height={74}
        viewBox='0 0 75 74'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{
          animation: 'spin 1.5s linear infinite',
        }}
      >
        <g clipPath='url(#clip0_2165_11211)' fill='#72B62F'>
          <path d='M37.078 20.692a5.442 5.442 0 01-5.442-5.442V5.442a5.442 5.442 0 0110.884 0v9.808a5.442 5.442 0 01-5.442 5.442z' />
          <path
            opacity={0.2}
            d='M52.468 27.05a5.443 5.443 0 01-3.848-9.29l6.926-6.926a5.442 5.442 0 017.696 7.696l-6.926 6.926a5.431 5.431 0 01-3.848 1.594z'
          />
          <path opacity={0.4} d='M68.636 42.443h-9.793a5.442 5.442 0 010-10.884h9.793a5.442 5.442 0 010 10.884z' />
          <path
            opacity={0.5}
            d='M59.394 64.755a5.422 5.422 0 01-3.848-1.594l-6.926-6.926a5.443 5.443 0 017.696-7.696l6.926 6.926a5.442 5.442 0 01-3.848 9.29z'
          />
          <path
            opacity={0.6}
            d='M37.078 74a5.442 5.442 0 01-5.442-5.442v-9.794a5.442 5.442 0 0110.884 0v9.794A5.442 5.442 0 0137.078 74z'
          />
          <path
            opacity={0.7}
            d='M14.762 64.756a5.442 5.442 0 01-3.848-9.29l6.937-6.937a5.44 5.44 0 017.694 0 5.442 5.442 0 010 7.696l-6.937 6.937a5.43 5.43 0 01-3.848 1.594h.002z'
          />
          <path opacity={0.8} d='M15.314 42.443H5.52a5.442 5.442 0 010-10.884h9.794a5.442 5.442 0 010 10.884z' />
          <path
            opacity={0.85}
            d='M21.688 27.05a5.421 5.421 0 01-3.848-1.594l-6.926-6.926a5.442 5.442 0 017.696-7.696l6.926 6.926a5.443 5.443 0 01-3.848 9.29z'
          />
        </g>
        <defs>
          <clipPath id='clip0_2165_11211'>
            <path fill='#fff' transform='translate(.078)' d='M0 0H74V74H0z' />
          </clipPath>
        </defs>
        <style>
          {`
       @keyframes spin {
         from { transform: rotate(0deg); }
         to { transform: rotate(360deg); }
       }
     `}
        </style>
      </svg>
    </SvgIcon>
  );
};

export default LoadingAnimationIcon;
