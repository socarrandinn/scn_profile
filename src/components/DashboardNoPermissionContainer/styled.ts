import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: 40,
  fontWeight: 'bold',
  marginTop: 16,
  marginBottom: 16,
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: 20,
  marginBottom: 16,
}));
