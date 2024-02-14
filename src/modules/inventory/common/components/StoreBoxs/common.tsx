import { Paper, Typography, styled } from '@mui/material';

export const PaperContent = styled(Paper)(({ theme }) => ({
  padding: '16px 24px',
  [theme.breakpoints.down('sm')]: {
    padding: 16
  },
}));

export const TotalDividend = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  lineHeight: 1.2,
}));
