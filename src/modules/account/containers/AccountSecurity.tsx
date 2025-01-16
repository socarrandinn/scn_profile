import { memo } from 'react';
import UserDeviceList from 'modules/security/users/containers/UserDeviceList';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { ChangePassword } from 'modules/account/components/AccountSecurityInfo';
import { useFindAccountDevices } from 'modules/account/hooks/useFindAccountDevices';

const AccountSecurity = () => {
  const { isLoading, data, error } = useFindAccountDevices();

  return (
    <>
      <PaperTabView firsts>
        <ChangePassword lastPassword/>
      </PaperTabView>
      <PaperTabView>
        <UserDeviceList isLoading={isLoading} data={data} error={error} />
      </PaperTabView>
    </>
  );
};

export default memo(AccountSecurity);
