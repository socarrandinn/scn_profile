import { memo } from 'react';
import UserDetailContainer from 'modules/account/containers/UserDetailsContainer';
import { CenterPageLayout } from 'layouts/index';

const AccountDetails = () => {
  return (
    <CenterPageLayout>
      <UserDetailContainer />
    </CenterPageLayout>
  );
};

export default memo(AccountDetails);
