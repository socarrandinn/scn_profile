import { styled, Paper } from '@mui/material';

export const OfferPaper = styled(Paper)(({ theme }) => ({
  margin: '16px 0',
  border: `1px solid ${theme.palette.divider}`,
  padding: 16,
  boxShadow: theme.shadows[0],
  [theme.breakpoints.down('md')]: {
    margin: '8px 0',
    padding: 8,
  },
}));
