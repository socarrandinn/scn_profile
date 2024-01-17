import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { SupplierUsersToolbar } from '../components/SupplierUsersToolbar';
import { userColumns } from 'modules/security/users/constants/user.columns';
import { useFindSupplierProducts } from '../hooks/useFindSupplierProducts';
import { useProviderProductsDetail } from '../context/ProviderProductDetail';
// import { UserListToolbar } from 'modules/security/users/components/UserListToolbar';
// import { supplierProductTabColumns } from 'modules/inventory/product/constants';

const SupplierUsersListContainer = () => {
  const { providerProductsId } = useProviderProductsDetail();
  const { isLoading, error, data } = useFindSupplierProducts(providerProductsId);

  return (
    <Box>
      <SupplierUsersToolbar />
      {/* <UserListToolbar /> */}
      <Table
        columns={userColumns}
        data={data?.data} // todo: analizar la data
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(SupplierUsersListContainer);
