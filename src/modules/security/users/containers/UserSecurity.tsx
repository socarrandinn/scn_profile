import { memo } from 'react';
import { UserSecurityInfo } from '../components/UserSecurityInfo';
import UserDeviceList from 'modules/security/users/containers/UserDeviceList';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { useFindUserDevices } from 'modules/security/users/hooks/useFindUserDevices';

const UserSecurity = () => {
  const { isLoading, data, error } = useFindUserDevices();
  return (
    <>
      <PaperTabView firsts>
        <UserSecurityInfo />
      </PaperTabView>
      <PaperTabView>
        <UserDeviceList isLoading={isLoading} data={data} error={error} />
      </PaperTabView>
    </>
  );
};

export default memo(UserSecurity);
