import { TableProvider } from '@dfl/mui-admin-layout';
import RoleProviderListContainer from 'modules/security/roles/containers/RoleProviderListContainer';
import { roleProviderListFilters } from 'modules/security/roles/constants/role-provider.filters';

const RoleProviderList = () => {
  return (
    <TableProvider id={'roles'} filters={roleProviderListFilters}>
      <RoleProviderListContainer />
    </TableProvider>
  );
};

export default RoleProviderList;
