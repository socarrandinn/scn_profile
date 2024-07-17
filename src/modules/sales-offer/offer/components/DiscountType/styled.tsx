import { FormToggleButtonGroup } from '@dfl/mui-react-common';
import { styled } from '@mui/material';

export const SFormToggleButtonGroup = styled(FormToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButton-root.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: '#FFF',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: '#FFF',
    },
  },
}));
