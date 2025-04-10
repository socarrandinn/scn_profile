import { memo } from 'react';
import RetypePassword from './RetypePassword';
import { PermissionCheck, useUser } from '@dfl/react-security';
import { useParams } from 'react-router';
import { SkeletonForm } from '@dfl/mui-react-common';
import { useUserDetail } from 'modules/security/users/contexts/UserDetailContext';
import { ADMIN } from 'modules/security/roles/constants/permissions';
import { ChangePassword } from 'modules/account/components/AccountSecurityInfo';
import { IUser } from '../../interfaces/IUser';

const UserSecurityInfo = () => {
  const { isLoading, user } = useUserDetail();
  const { user: userCurrent } = useUser();
  const { id } = useParams();

  if (isLoading) {
    return <SkeletonForm numberItemsToShow={4} itemHeight={15} />;
  }
  if (userCurrent?._id === id) {
    return <ChangePassword lastPassword />;
  }

  return (
    <PermissionCheck permissions={ADMIN}>
      <RetypePassword user={user as IUser} />
    </PermissionCheck>
  );
};

export default memo(UserSecurityInfo);
