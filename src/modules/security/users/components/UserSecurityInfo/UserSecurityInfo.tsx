import { memo, useMemo } from 'react';
import ChangePassword from './ChangePassword';
import RetypePassword from './RetypePassword';
import { PermissionCheck, useUser } from '@dfl/react-security';
import { useLocation, useParams } from 'react-router';
import { SkeletonForm } from '@dfl/mui-react-common';
import { useUserDetail } from 'modules/security/users/contexts/UserDetail';
import { ADMIN } from 'modules/security/roles/constants/permissions';

const UserSecurityInfo = () => {
  const { isLoading } = useUserDetail();
  const { user } = useUser();
  const { id } = useParams();
  const { pathname } = useLocation();
  const isMe = useMemo(() => (pathname?.includes('/user/me') ? 'me' : ''), [pathname]);

  if (isLoading && !isMe) {
    return <SkeletonForm numberItemsToShow={4} itemHeight={15} />;
  }
  if (user?._id === id || isMe) {
    return <ChangePassword lastPassword/>;
  }

  return (
    <PermissionCheck permissions={ADMIN}>
      <RetypePassword />
    </PermissionCheck>
  );
};

export default memo(UserSecurityInfo);
