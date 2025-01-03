import { Divider, Stack } from '@mui/material';
import { memo } from 'react';
import { UserDetail } from 'modules/account/components/UserDetail';
import UserRoleInfo from 'modules/security/users/components/UserSummary/UserRoleInfo';
import { useAccountDetail } from 'modules/account/contexts/AccountDetail';

const AccountSummary = () => {
  const { user } = useAccountDetail();
  return (
    <Stack
      direction={'column'}
      spacing={0}
      sx={{ paddingBottom: 1 }}
    >
      <UserDetail />
      <Divider orientation='horizontal' />
      <UserRoleInfo user={user} isLoading={false} />
    </Stack>
  );
};

export default memo(AccountSummary);
