import { memo } from 'react';
import { PermissionCheck, useUser } from '@dfl/react-security';
import { SkeletonForm } from '@dfl/mui-react-common';
import ChangePassword from 'modules/security/users/components/UserSecurityInfo/ChangePassword';
import { useClientDetails } from 'modules/crm/clients/context/ClientDetailsContext';
import ClientRetypePassword from './ClientRetypePassword';

const ClientSecurityInfo = () => {
  const { isLoading, clientId } = useClientDetails();
  const { user } = useUser();

  if (isLoading) {
    return <SkeletonForm numberItemsToShow={4} itemHeight={15} />;
  }

  if (user?._id === clientId) {
    return <ChangePassword />;
  }

  return (
    <PermissionCheck permissions={'ADMIN'}>
      <ClientRetypePassword />
    </PermissionCheck>
  );
};

export default memo(ClientSecurityInfo);
