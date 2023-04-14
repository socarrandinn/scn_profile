import { memo } from 'react';
import UserDetailContainer from 'modules/security/users/containers/UserDetailContainer';
import { CenterPageLayout } from 'layouts/index';

const UserDetails = () => {
  return (
    <CenterPageLayout>
      <UserDetailContainer />
    </CenterPageLayout>
  );
};

export default memo(UserDetails);
