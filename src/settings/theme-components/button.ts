import { BORDER_RADIUS } from './constants';

declare module '@mui/material/Button' {
  // eslint-disable-next-line no-unused-vars
  interface ButtonPropsVariantOverrides {
    grey: true;
    contained: true;
  }
}

export const MuiButton = {
  styleOverrides: {
    root: {
      textTransform: 'none',
      fontWeight: 'normal',
      '.MuiChip-root': {
        height: '17px',
      },
      variants: [
        {
          props: { size: 'medium' },
          style: {
            borderRadius: BORDER_RADIUS.MEDIUM,
            // padding: '10px 16px'
          },
        },
        {
          props: { size: 'small' },
          style: {
            borderRadius: BORDER_RADIUS.SMALL,
            // padding: '6px 12px'
          },
        },
      ],
    },
    containedPrimary: ({ theme: { palette } }: any) => ({}),
    containedSuccess: ({ theme: { palette } }: any) => ({ color: palette.common.white }),
    outlinedPrimary: ({ theme: { palette } }: any) => ({}),
    textPrimary: ({ theme: { palette } }: any) => ({}),

    greyPrimary: ({ theme: { palette } }: any) => ({
      backgroundColor: palette.grey[100],
      border: 'none',
      color: '#2B3445',
      '&:hover': {
        backgroundColor: palette.grey[300],
      },
    }),
  },
};
