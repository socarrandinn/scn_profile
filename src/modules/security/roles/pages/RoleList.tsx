import { TableProvider } from '@dfl/mui-admin-layout';
import RoleListContainer from 'modules/security/roles/containers/RoleListContainer';
import { createdATFilter } from 'modules/common/constants/filters/common.filters';

const RoleList = () => {
  return (
    <TableProvider id={'roles'} filters={[createdATFilter]}>
      <RoleListContainer />
    </TableProvider>
  );
};

export default RoleList;
