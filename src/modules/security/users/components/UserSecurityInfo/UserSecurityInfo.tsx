import { memo } from 'react';
import ChangePassword from './ChangePassword';
import RetypePassword from './RetypePassword';
import { PermissionCheck, useUser } from '@dfl/react-security';
import { useParams } from 'react-router';
import { SkeletonForm } from '@dfl/mui-react-common';
import { useUserDetail } from 'modules/security/users/contexts/UserDetail';

const UserSecurityInfo = () => {
  const { isLoading } = useUserDetail();
  const { user } = useUser();
  const { id } = useParams();

  if (isLoading) {
    return <SkeletonForm numberItemsToShow={4} itemHeight={15} />;
  }

  if (user?._id === id) {
    return <ChangePassword />;
  }

  return (
    <PermissionCheck permissions={'ADMIN'}>
      <RetypePassword />
    </PermissionCheck>
  );
};

export default memo(UserSecurityInfo);
