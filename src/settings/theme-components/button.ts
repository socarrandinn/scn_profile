declare module '@mui/material/Button' {
  // eslint-disable-next-line no-unused-vars
  interface ButtonPropsVariantOverrides {
    white: true;
    link: true;
    grey: true;
  }
}

export const MuiButton = {
  styleOverrides: {
    root: {
      textTransform: 'none',
      borderRadius: 5,
    },

    containedPrimary: ({ theme: { palette } }: any) => ({}),
    outlinedPrimary: ({ theme: { palette } }: any) => ({}),
    textPrimary: ({ theme: { palette } }: any) => ({}),
  },
};
