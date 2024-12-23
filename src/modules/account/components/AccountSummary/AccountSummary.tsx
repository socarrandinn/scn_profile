import { Divider, Stack } from '@mui/material';
import { memo } from 'react';
import { UserDetail } from 'modules/account/components/UserDetail';
import { PermissionCheck } from '@dfl/react-security';
import UserRoleInfo from 'modules/security/users/components/UserSummary/UserRoleInfo';
import { useUserDetail } from 'modules/account/contexts/UserDetail';

const AccountSummary = () => {
  const { user } = useUserDetail();
  return (
    <Stack
      direction={'column'}
      spacing={0}
      sx={{ paddingBottom: 1 }}
    >
      <UserDetail />
      <PermissionCheck permissions={'USER_ADMIN'}>
        <Divider orientation='horizontal' />
        <UserRoleInfo user={user} isLoading={false} />
      </PermissionCheck>
    </Stack>
  );
};

export default memo(AccountSummary);
