import { Stack, styled } from '@mui/material';

export const ItemContent = styled(Stack)(({ theme }) => ({
  gap: 1,
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  height: 47,
  backgroundColor: theme.palette.grey[100],
  borderRadius: 10,
  padding: '4px 12px 4px 24px',
}));
