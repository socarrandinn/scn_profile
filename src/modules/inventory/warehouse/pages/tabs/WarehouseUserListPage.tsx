import { memo } from 'react';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';
import { filters } from 'modules/security/users/constants/filters';
import WarehouseUserListContainer from '../../containers/WarehouseUserListContainer';

const WarehouseUserListPage = () => {
  return (
    <TableProvider id={'warehouse-users'} filters={filters}>
      <FilterViewProvider views={userViewTabs}>
        <WarehouseUserListContainer />
      </FilterViewProvider>
    </TableProvider>
  );
};

export default memo(WarehouseUserListPage);
