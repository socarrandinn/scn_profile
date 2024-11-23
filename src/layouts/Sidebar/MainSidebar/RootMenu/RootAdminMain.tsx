import { Box, styled } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';

const AdminLayoutRoot = styled('div')<{ pl: number }>(({ theme, pl }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: pl || 280,
  },
}));

export const RootAdminMain = ({ children, pl }: ChildrenProps & { pl: number }) => {
  return (
    <AdminLayoutRoot pl={pl}>
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          width: '100%',
          paddingX: { xs: '8px', md: '20px' },
        }}
      >
        {children}
      </Box>
    </AdminLayoutRoot>
  );
};
