import { memo } from 'react';
import { UserList } from 'modules/security/users/pages';
import { Box } from '@mui/material';

const UserStore = () => {
  return (
    <Box mb={4}>
      <UserList />
    </Box>
  );
};

export default memo(UserStore);
