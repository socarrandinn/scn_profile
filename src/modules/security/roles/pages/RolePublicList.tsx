import { TableProvider } from '@dfl/mui-admin-layout';
import RoleListContainer from '../containers/RoleListContainer';
import { createdATFilter } from 'modules/common/constants';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { rolePublicColumns } from '../constants';

const RolePublicList = () => {
  return (
    <TableProvider id={'roles-public'} filters={[createdATFilter]}>
      <RoleListContainer type={SPACE_TYPE.PUBLIC} columns={rolePublicColumns} />
    </TableProvider>
  );
};

export default RolePublicList;
