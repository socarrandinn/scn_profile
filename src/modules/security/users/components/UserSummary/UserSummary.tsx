import { memo } from 'react';
import { Divider, Stack } from '@mui/material';
import UserRoleInfo from 'modules/security/users/components/UserSummary/UserRoleInfo';
import { UserActions } from 'modules/security/users/components/UserActions';
import { UserDetail } from 'modules/security/users/components/UserDetail';
import { PermissionCheck, useUser } from '@dfl/react-security';
import { useParams } from 'react-router-dom';
import { useUserDetail } from 'modules/security/users/contexts/UserDetail';

const UserSummary = () => {
  const { id } = useParams();
  const { user: currentUser } = useUser();
  const { isLoading, user } = useUserDetail();
  return (
    <Stack
      direction={'column'}
      divider={<Divider orientation='horizontal' />}
      spacing={0}
      sx={{ paddingBottom: 1 }}
    >
      <UserDetail />
      <PermissionCheck permissions={'USER_ADMIN'}>
        <UserRoleInfo isLoading={isLoading} user={user} />
        {currentUser.id !== id && <UserActions />}
      </PermissionCheck>
    </Stack>
  );
};

export default memo(UserSummary);
