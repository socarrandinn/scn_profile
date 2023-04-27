import { memo } from 'react';
import { Divider, Stack } from '@mui/material';
import UserRoleInfo from 'modules/security/users/components/UserSummary/UserRoleInfo';
import { UserActions } from 'modules/security/users/components/UserActions';
import { UserDetail } from 'modules/security/users/components/UserDetail';
import { PermissionCheck, useUser } from '@dfl/react-security';
import { useParams } from 'react-router-dom';

const UserSummary = () => {
  const { user } = useUser();
  const { id } = useParams();

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
        {user.id !== id && <UserActions />}
      </PermissionCheck>
    </Stack>
  );
};

export default memo(UserSummary);
