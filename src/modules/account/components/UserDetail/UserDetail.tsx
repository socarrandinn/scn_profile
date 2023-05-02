import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { USER_DETAILS_SUMMARY } from 'modules/security/users/constants';
import { DetailStack, HandlerError } from '@dfl/mui-react-common';
import { useUserDetail } from 'modules/account/contexts/UserDetail';
import AvatarUser from 'modules/security/users/components/AvatarUser/AvatarUser';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';
import { IUser } from 'modules/security/users/interfaces/IUser';

const UserDetail = () => {
  const { user, isLoading, error } = useUserDetail();
  if (isLoading) {
    return <SummaryWithAvatarSkeleton />;
  }
  if (error) {
    return <HandlerError error={error} />;
  }

  return (
    <Stack p={2} pt={5} spacing={2}>
      <Stack direction='column' alignItems='center' spacing={0}>
        <AvatarUser user={user as IUser} />
        <Typography variant={'h3'} mt={1}>
          {user?.fullName}
        </Typography>
        <Typography color={'text.secondary'}>{user?.email}</Typography>
      </Stack>

      <DetailStack details={USER_DETAILS_SUMMARY} data={user} />
    </Stack>
  );
};

export default memo(UserDetail);
