import { memo } from 'react';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { RoleUsersList } from '../components/RoleUsersList';
import { useRoleDetail } from '../contexts';
import { PagePaperLayout } from 'layouts/index';
import { userFilters } from 'modules/security/users/constants/user-filters';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

const RoleUsersContainer = () => {
  const { roleId, type } = useRoleDetail();

  return (
    <PagePaperLayout mb={3}>
      <FilterViewProvider views={userViewTabs}>
        <TableProvider id={'role-users'} filters={userFilters(SPACE_TYPE.ROOT)}>
          <RoleUsersList roleId={roleId} type={type} />
        </TableProvider>
      </FilterViewProvider>
    </PagePaperLayout>
  );
};

export default memo(RoleUsersContainer);
