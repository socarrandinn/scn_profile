import { memo } from 'react';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';
import { filters } from 'modules/security/users/constants/filters';
import UserSystemListContainer from 'modules/security/users/containers/UserSystemListContainer';

const UserList = () => {
  return (
    <TableProvider id={'users'} filters={filters}>
      <FilterViewProvider views={userViewTabs}>
        <UserSystemListContainer />
      </FilterViewProvider>
    </TableProvider>
  );
};

export default memo(UserList);
