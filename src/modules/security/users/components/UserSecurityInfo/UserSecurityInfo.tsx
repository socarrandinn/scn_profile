import { memo, useMemo } from 'react';
import RetypePassword from './RetypePassword';
import { PermissionCheck, useUser } from '@dfl/react-security';
import { useParams } from 'react-router';
import { SkeletonForm } from '@dfl/mui-react-common';
import { useUserDetail } from 'modules/security/users/contexts/UserDetail';
import { ADMIN } from 'modules/security/roles/constants/permissions';
import { ChangePassword } from 'modules/account/components/AccountSecurityInfo';

const UserSecurityInfo = () => {
  const { isLoading } = useUserDetail();
  const { user } = useUser();
  const { id } = useParams();

  if (isLoading) {
    return <SkeletonForm numberItemsToShow={4} itemHeight={15} />;
  }
  if (user?._id === id) {
    return <ChangePassword lastPassword />;
  }

  return (
    <PermissionCheck permissions={ADMIN}>
      <RetypePassword />
    </PermissionCheck>
  );
};

export default memo(UserSecurityInfo);
