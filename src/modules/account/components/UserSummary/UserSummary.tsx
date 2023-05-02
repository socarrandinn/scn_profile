import { Divider, Stack } from '@mui/material';
import UserRoleInfo from 'modules/account/components/UserSummary/UserRoleInfo';
import { memo } from 'react';
import { UserDetail } from 'modules/account/components/UserDetail';
import { PermissionCheck } from '@dfl/react-security';

const UserSummary = () => {
  return (
    <Stack
      direction={'column'}
      divider={<Divider orientation='horizontal' light />}
      spacing={0}
      sx={{ paddingBottom: 1 }}
    >
      <UserDetail />
      <PermissionCheck permissions={'USER_ADMIN'}>
        <UserRoleInfo />
      </PermissionCheck>
    </Stack>
  );
};

export default memo(UserSummary);
