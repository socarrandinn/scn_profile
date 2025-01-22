import { memo } from 'react';
import UserDetailContainer from 'modules/security/users/containers/UserDetailContainer';
import { CenterPageLayout } from 'layouts/index';
import { UserDetailsContent } from 'modules/security/users/components/UserDetailsContent';
import { accountProviderTabs } from '../constants/user-provider-details.tabs';

const UserProviderDetails = () => {
  return (
    <CenterPageLayout>
      <UserDetailContainer>
        <UserDetailsContent path={'security/providers-users/user'} tabs={accountProviderTabs} />
      </UserDetailContainer>
    </CenterPageLayout>
  );
};

export default memo(UserProviderDetails);
