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

export const CustomIcon = styled(Box)<{ colorIcon: string }>(({ theme, colorIcon }) => ({
  display: 'flex',
  border: `2px solid ${colorIcon || theme.palette.primary.main}`,
  borderRadius: '50%',
  backgroundColor: colorIcon,
  color: theme.palette.background.paper,
  padding: 2,
}));
