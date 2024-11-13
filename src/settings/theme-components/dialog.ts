import { Theme } from '@mui/material/styles';
import { BORDER_RADIUS } from './constants';

export const MuiDialog = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme; ownerState: any }) => ({
      '& .MuiDialog-paper': {
        position: 'relative',
        borderRadius: BORDER_RADIUS.LARGE,
        padding: 16,
      },
      '& .MuiBackdrop-root': {
        backdropFilter: 'blur(5px)',
        backgroundColor: '#95ACA620',
      },
    }),
  },
};

export const MuiDialogTitle = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme; ownerState: any }) => ({
      padding: 16,
      fontWeight: 700,
      fontSize: 18,
      lineHeight: '1.5rem',
    }),
  },
};

export const MuiDialogContent = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme; ownerState: any }) => ({
      padding: '20px 16px',
    }),
  },
};
