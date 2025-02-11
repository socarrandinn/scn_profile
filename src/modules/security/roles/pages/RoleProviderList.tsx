import { TableProvider } from '@dfl/mui-admin-layout';
import RoleListContainer from '../containers/RoleListContainer';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { roleProviderFilters } from '../constants/role.filters';
import { roleProviderColumns } from '../constants';

const RoleProviderList = () => {
  return (
    <TableProvider id={'roles-provider-list'} filters={roleProviderFilters}>
      <RoleListContainer type={SPACE_TYPE.PROVIDER} columns={roleProviderColumns} />
    </TableProvider>
  );
};

export default RoleProviderList;
