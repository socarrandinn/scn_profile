import { memo } from 'react';
import UserDetailContainer from 'modules/security/users/containers/UserDetailContainer';
import { CenterPageLayout } from 'layouts/index';
import UserProviderDetailsContent from '../components/UserDetailsContent/UserProviderDetailsContent';

const UserProviderDetails = () => {
  return (
    <CenterPageLayout>
      <UserDetailContainer>
        <UserProviderDetailsContent />
      </UserDetailContainer>
    </CenterPageLayout>
  );
};

export default memo(UserProviderDetails);
