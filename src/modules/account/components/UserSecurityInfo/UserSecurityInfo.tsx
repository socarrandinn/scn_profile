import { memo } from 'react';
import ChangePassword from './ChangePassword';
import RetypePassword from './RetypePassword';
import { PermissionCheck, useUser } from '@dfl/react-security';
import { SkeletonForm } from '@dfl/mui-react-common';
import { useUserDetail } from 'modules/account/contexts/UserDetail';

const UserSecurityInfo = () => {
  const { isLoading } = useUserDetail();
  const { user } = useUser();

  if (isLoading) {
    return <SkeletonForm numberItemsToShow={4} itemHeight={15} />;
  }

  if (user?._id) {
    return <ChangePassword />;
  }

  return (
    <PermissionCheck permissions={'USER_ADMIN'}>
      <RetypePassword />
    </PermissionCheck>
  );
};

export default memo(UserSecurityInfo);
