import { FlexBox } from '@dfl/mui-react-common';
import { styled } from '@mui/material';

type Props = {
  size: 'large' | 'small' | 'middle' | undefined;
};

export const FormEmailInputStyle = styled(FlexBox)<Props>(({ theme, size }) => ({
  position: 'relative',
  '.MuiInputBase-input': {
    flexGrow: 1,
    paddingLeft: '112px!important',
  },
  '.phone-label-select': {
    position: 'absolute',
    left: 0,
    ...(size === 'small' ? { height: 37 } : { height: 53 }),
    display: 'flex',
    alignItems: 'center',
    borderRightStyle: 'solid',
    borderRightWidth: 1,
    borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23);',
    button: {
      height: '100%',
      width: 100,
    },
  },
  '.email-options': {
    position: 'absolute',
    right: 0,
    ...(size === 'small' ? { height: 37 } : { height: 53 }),
    display: 'flex',
    justifyContent: 'center',
  },
}));
