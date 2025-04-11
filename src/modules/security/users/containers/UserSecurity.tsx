import { memo } from 'react';
import { UserSecurityInfo } from '../components/UserSecurityInfo';
import UserDeviceList from 'modules/security/users/containers/UserDeviceList';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { useUserDetail } from '../contexts/UserDetailContext';
import { useUser } from '@dfl/react-security';

const UserSecurity = () => {
  const { user } = useUser();
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

export default memo(UserSecurity);
