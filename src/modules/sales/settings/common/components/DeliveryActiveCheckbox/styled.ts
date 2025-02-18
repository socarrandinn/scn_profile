import { SwitchField } from '@dfl/mui-react-common';
import { styled } from '@mui/material';

export const IphoneSwitch = styled(SwitchField)(() => ({
  gap: 1,
  marginX: 0,
  '& .MuiTypography-root': {
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  '.MuiSwitch-root': {
    width: 36,
    height: 18,
    padding: 0,
  },
  '& .MuiSwitch-switchBase': {
    padding: '3px',
    top: '-1px',
    color: '#BABABA',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#72B62F',
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 14,
    height: 14,
    padding: 0,
  },
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: '#D9D9DC',
    opacity: 1,
  },
  flexDirection: 'column',
}));
