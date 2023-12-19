import { styled, Tabs } from '@mui/material';

export const HeaderTab = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
