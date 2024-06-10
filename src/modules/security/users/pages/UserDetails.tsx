import { memo } from 'react';
import UserDetailContainer from 'modules/security/users/containers/UserDetailContainer';
import { CenterPageLayout } from 'layouts/index';
import UserSystemDetailsContent from '../components/UserDetailsContent/UserSystemDetailsContent';

const UserDetails = () => {
  return (
    <CenterPageLayout>
      <UserDetailContainer>
        <UserSystemDetailsContent />
      </UserDetailContainer>
    </CenterPageLayout>
  );
};

export default memo(UserDetails);
