import { TableProvider } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants/common.filters';
import RoleProviderListContainer from '../containers/RoleProviderListContainer';

const RoleList = () => {
  return (
    <TableProvider id={'roles'} filters={[createdATFilter]}>
      <RoleProviderListContainer />
    </TableProvider>
  );
};

export default RoleList;
