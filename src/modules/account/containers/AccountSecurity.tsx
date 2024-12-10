import { memo } from 'react';
import UserDeviceList from 'modules/security/users/containers/UserDeviceList';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { UserSecurityInfo } from 'modules/security/users/components/UserSecurityInfo';

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
