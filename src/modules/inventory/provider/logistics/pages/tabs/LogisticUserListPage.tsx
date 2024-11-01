import { memo } from 'react';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import LogisticUserListContainer from 'modules/inventory/provider/logistics/containers/LogisticUserListContainer';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';
import { filters } from 'modules/security/users/constants/filters';

const LogisticUserListPage = () => {
  return (
    <TableProvider id={'logistic-users'} filters={filters}>
      <FilterViewProvider views={userViewTabs}>
        <LogisticUserListContainer />
      </FilterViewProvider>
    </TableProvider>
  );
};

export default memo(LogisticUserListPage);
