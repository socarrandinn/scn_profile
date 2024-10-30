import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProviderUsersInvites } from 'modules/security/users-invite/hooks/useFindUsersInvites';
import { usersInviteColumns } from 'modules/security/users-invite/constants/users-invite.columns';
import { SupplierUsersToolbar } from '../components/SupplierUsersToolbar';
import { useProviderProductsDetail } from '../context/ProviderProductDetail';

const SupplierUsersInviteListContainer = () => {
  const { providerProductsId } = useProviderProductsDetail();
  const { isLoading, error, data } = useFindProviderUsersInvites(providerProductsId);
  return (
    <Box>
      <TabsFilter translation={'users'} defaultView={'all'} />
      <SupplierUsersToolbar />
      <Table
        columns={usersInviteColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        // select
      />
    </Box>
  );
};

export default memo(SupplierUsersInviteListContainer);
