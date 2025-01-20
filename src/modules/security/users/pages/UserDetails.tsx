import { memo } from 'react';
import UserDetailContainer from 'modules/security/users/containers/UserDetailContainer';
import { CenterPageLayout } from 'layouts/index';
import { UserDetailsContent } from 'modules/security/users/components/UserDetailsContent';

const UserDetails = () => {
  return (
    <CenterPageLayout>
      <UserDetailContainer>
        <UserDetailsContent />
      </UserDetailContainer>
    </CenterPageLayout>
  );
};

export default memo(UserDetails);
