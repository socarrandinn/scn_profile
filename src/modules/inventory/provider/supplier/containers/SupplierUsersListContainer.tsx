import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';

import { SupplierUsersToolbar } from 'modules/inventory/provider/supplier/components/SupplierUsersToolbar';
import { useFindProvidersUsersTable } from 'modules/inventory/provider/supplier/hooks/useFindProvidersUsersTable';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import { supplierUsersColumns } from 'modules/inventory/provider/supplier/constants';

const SupplierUsersListContainer = () => {
  const { providerProductsId } = useProviderProductsDetail();
  const { isLoading, error, data } = useFindProvidersUsersTable(providerProductsId as string);

  return (
    <Box>
      <SupplierUsersToolbar />
      <Table
        columns={supplierUsersColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(SupplierUsersListContainer);
