import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import UserDeviceList from 'modules/security/users/containers/UserDeviceList';
import React, { memo } from 'react';
import ClientSecurityInfo from 'modules/crm/clients/components/ClientSecurityInfo/ClientSecurityInfo';
import ClientManageRolesContainer from 'modules/crm/clients/containers/ClientManageRolesContainer';

const ClientSecurityPage = () => {
  return (
    <>
      <PaperTabView firsts>
        <ClientSecurityInfo />
      </PaperTabView>
      <PaperTabView>
        <ClientManageRolesContainer />
      </PaperTabView>
      <PaperTabView>
        <UserDeviceList />
      </PaperTabView>
    </>
  );
};

export default memo(ClientSecurityPage);
