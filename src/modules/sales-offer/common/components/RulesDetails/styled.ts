import { Stack, styled, Typography } from '@mui/material';

export const HeaderTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: 36,
  padding: '8px 16px',
  fontWeight: 500,
}));

export const StackSection = styled(Stack)(({ theme }) => ({
  width: '100%',
}));

export const StackContainer = styled(StackSection)(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.divider,
  borderRadius: 10,
  overflow: 'hidden',
  width: '100%',
}));

export const StackContent = styled(StackSection)(({ theme }) => ({
  padding: '8px 16px',
}));
