import { memo } from 'react';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import SupplierUsersListContainer from '../../containers/SupplierUsersListContainer';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';
import { filters } from 'modules/security/users/constants/filters';

const SupplierUsersPage = () => {
  return (
    <TableProvider id={'supplier-users'} filters={filters}>
      <FilterViewProvider views={userViewTabs}>
        <SupplierUsersListContainer />
      </FilterViewProvider>
    </TableProvider>
  );
};

export default memo(SupplierUsersPage);
