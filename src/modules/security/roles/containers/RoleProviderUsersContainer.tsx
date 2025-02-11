import { memo } from 'react';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';
import { RoleProviderUsersList } from '../components/RoleProviderUsersList/RoleProviderUsersList';
import { useRoleDetail } from '../contexts/RoleDetailContext';
import { PagePaperLayout } from 'layouts/index';
import { userFilters } from 'modules/security/users/constants/user-filters';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

const RoleProviderUsersContainer = () => {
  const { data, roleId } = useRoleDetail();

  return (
    <PagePaperLayout mb={3} mt={0}>
      <FilterViewProvider views={userViewTabs}>
        <TableProvider id={'role-provider-users'} filters={userFilters(SPACE_TYPE.PROVIDER)}>
          <RoleProviderUsersList providerType={data?.provider} roleId={roleId} />
        </TableProvider>
      </FilterViewProvider>
    </PagePaperLayout>
  );
};

export default memo(RoleProviderUsersContainer);
