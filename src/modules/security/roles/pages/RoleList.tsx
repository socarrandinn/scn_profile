import { TableProvider } from '@dfl/mui-admin-layout';
import RoleListContainer from 'modules/security/roles/containers/RoleListContainer';
import { createdATFilter } from 'modules/common/constants/filters/common.filters';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

const RoleList = () => {
  return (
    <TableProvider id={'roles'} filters={[createdATFilter]}>
      <RoleListContainer type={SPACE_TYPE.ROOT} />
    </TableProvider>
  );
};

export default RoleList;
