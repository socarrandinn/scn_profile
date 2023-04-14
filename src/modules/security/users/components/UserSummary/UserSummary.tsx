import { Divider, Stack } from '@mui/material';
import UserRoleInfo from 'modules/security/users/components/UserSummary/UserRoleInfo';
import { memo } from 'react';
import { UserActions } from 'modules/security/users/components/UserActions';
import { UserDetail } from 'modules/security/users/components/UserDetail';
import { PermissionCheck } from '@dfl/react-security';

const UserSummary = () => {
  return (
    <Stack direction={'column'} divider={<Divider orientation='horizontal' light />} spacing={0}>
      <UserDetail />
      <PermissionCheck permissions={'USER_ADMIN'}>
        <UserRoleInfo />
        <UserActions />
      </PermissionCheck>
    </Stack>
  );
};

export default memo(UserSummary);
