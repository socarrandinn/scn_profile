import { styled, Paper, Stack, Box } from '@mui/material';

export const CounterGroupCardPaper = styled(Paper)(({ theme }) => ({}));

export const ItemContent = styled(Stack)(({ theme }) => ({
  alignItems: 'left',
  width: '100%',
}));
export const ItemHeaderContent = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: 8,
  alignItems: 'center',
}));

export const ItemCurrencyContent = styled(Stack)(({ theme }) => ({}));

export const CustomIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  borderRadius: '50%',
  color: theme.palette.background.paper,
  padding: 2,
}));
