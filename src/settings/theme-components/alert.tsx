import { ErrorIcon } from 'components/libs/Icons';

export const MuiAlert = {
  styleOverrides: {
    root: {
      textTransform: 'none',
      borderRadius: 10,
    },

    containedInfo: ({ theme: { palette } }: any) => ({
      backgroundColor: palette.info.main,
      color: palette.common.white,
      border: `1px solid ${palette.info.dark as string}`,
    }),

    outlinedError: ({ theme: { palette } }: any) => ({
      borderColor: palette.error.main,
      color: palette.error.main,
    }),

    outlinedSuccess: ({ theme: { palette } }: any) => ({
      borderColor: palette.success.main,
      color: palette.success.main,
    }),

    outlinedWarning: ({ theme: { palette } }: any) => ({
      borderColor: palette.warning.main,
      color: palette.warning.main,
    }),

    outlinedInfo: ({ theme: { palette } }: any) => ({
      borderColor: palette.info.main,
      color: palette.info.main,
    }),

    textError: ({ theme: { palette } }: any) => ({
      color: palette.error.main,
    }),

    textSuccess: ({ theme: { palette } }: any) => ({
      color: palette.success.main,
    }),

    textWarning: ({ theme: { palette } }: any) => ({
      color: palette.warning.main,
    }),

    textInfo: ({ theme: { palette } }: any) => ({
      color: palette.info.main,
    }),
  },
  defaultProps: {
    iconMapping: {
      error: <ErrorIcon sx={{ fontSize: 21 }} />,
    },
  },
};
