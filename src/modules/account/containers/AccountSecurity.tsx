import { memo } from 'react';
import UserDeviceList from 'modules/security/users/containers/UserDeviceList';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { ChangePassword } from 'modules/account/components/AccountSecurityInfo';

const AccountSecurity = () => {
  return (
    <>
      <PaperTabView firsts>
        <ChangePassword lastPassword />
      </PaperTabView>
      <PaperTabView>
        <UserDeviceList />
      </PaperTabView>
    </>
  );
};

export default memo(AccountSecurity);
