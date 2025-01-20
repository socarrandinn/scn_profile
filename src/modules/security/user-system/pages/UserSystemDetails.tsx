import { memo } from 'react';
import UserDetailContainer from 'modules/security/users/containers/UserDetailContainer';
import { CenterPageLayout } from 'layouts/index';
import { UserDetailsContent } from 'modules/security/users/components/UserDetailsContent';
import { accountSystemTabs } from '../constants/user-system-details.tabs';

const UserSystemDetails = () => {
  return (
    <CenterPageLayout>
      <UserDetailContainer>
        <UserDetailsContent path={'security/system-users/user'} tabs={accountSystemTabs} />
      </UserDetailContainer>
    </CenterPageLayout>
  );
};

export default memo(UserSystemDetails);
