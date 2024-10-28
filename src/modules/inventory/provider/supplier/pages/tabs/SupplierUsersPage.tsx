import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import SupplierUsersListContainer from '../../containers/SupplierUsersListContainer';

const SupplierUsersPage = () => {
  return (
    <TableProvider id={'supplier-users'}>
      <SupplierUsersListContainer />
    </TableProvider>
  );
};

export default memo(SupplierUsersPage);
