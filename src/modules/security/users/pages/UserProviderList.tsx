import { memo } from 'react';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';
import { filters } from 'modules/security/users/constants/filters';
import UserProviderListContainer from '../containers/UserProviderListContainer';

const UserProviderList = () => {
  return (
    <TableProvider id={'users-providers'} filters={filters}>
      <FilterViewProvider views={userViewTabs}>
        <UserProviderListContainer />
      </FilterViewProvider>
    </TableProvider>
  );
};

export default memo(UserProviderList);
