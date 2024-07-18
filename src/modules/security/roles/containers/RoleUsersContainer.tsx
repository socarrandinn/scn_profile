import { memo } from 'react';
import RoleUsersTable from './RoleUsersTable';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';
import { FilterViewProvider } from '@dfl/mui-admin-layout';

const RoleUsersContainer = () => {
  return (
    <FilterViewProvider views={userViewTabs}>
      <RoleUsersTable />
    </FilterViewProvider>
  );
};

export default memo(RoleUsersContainer);
