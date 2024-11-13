import { Theme } from '@mui/material/styles';
import { BORDER_RADIUS } from './constants';

export const MuiFormControl = {
  defaultProps: {
    variant: 'outlined',
  },
  styleOverrides: {
    root: () => ({}),
  },
};

export const MuiOutlinedInput = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      borderRadius: BORDER_RADIUS.MEDIUM,
      '& .MuiOutlinedInput-input': { fontSize: 14, fontWeight: 400 },
      /* variants: [
         {
          props: { size: 'medium' },
          style: {
            '& .MuiOutlinedInput-input': { padding: '12.5px 16px' },
            lineHeight: 1,
          },
        },
        {
          props: { size: 'small' },
          style: {
            lineHeight: 1,
            '& .MuiOutlinedInput-input': { padding: '12px 12px' },
          },
        },
      ], */
    }),
  },
};

export const MuiInputBase = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      minHeight: 12,
    }),
  },
};
