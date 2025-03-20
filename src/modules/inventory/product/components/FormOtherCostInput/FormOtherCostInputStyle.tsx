import { FlexBox } from '@dfl/mui-react-common';
import { styled } from '@mui/material';

type Props = {
  size: 'large' | 'small' | 'middle' | undefined;
};

export const FormOtherCostInputStyle = styled(FlexBox)<Props>(({ theme, size }) => ({
  position: 'relative',
  gap: '8px',
  '.MuiInputBase-input': {
    flexGrow: 1,
  },
  '.ownership-type-select': {
    ...(size === 'small' ? { height: 37 } : { height: 53 }),
    display: 'flex',
    border: '1px solid',
    borderRadius: '4px',
    borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23);',
    button: {
      height: '100%',
      width: 110,
    },
  },
  '.ownership-type-options': {
    marginTop: 4,
  },
}));
