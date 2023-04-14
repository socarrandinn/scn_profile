import { memo } from 'react';
import { UserSecurityInfo } from '../components/UserSecurityInfo';
import UserDeviceList from 'modules/security/users/containers/UserDeviceList';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';

const AccountSecurity = () => {
  return (
    <>
      <PaperTabView firsts>
        <UserSecurityInfo />
      </PaperTabView>
      <PaperTabView>
        <UserDeviceList />
      </PaperTabView>
    </>
  );
};

export default memo(AccountSecurity);
