import { memo, useMemo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import UserTableContainer, { UserTableContainerProps } from '../containers/UserTableContainer';
import { userFilters } from '../constants/user-filters';
import { SPACE_TYPE } from '../constants/space-types.constants';
import { userProviderColumns, userSystemColumns } from '../constants/user.columns';

const UserList = ({ type, status }: UserTableContainerProps) => {
  const filters = useMemo(() => userFilters(type), [type]);
  const columns = useMemo(() => type === SPACE_TYPE.PROVIDER ? userProviderColumns : userSystemColumns, [type]);

  return (
    <TableProvider id={`user-list-${type}`} filters={filters}>
      <UserTableContainer type={type} status={status} columns={columns} />
    </TableProvider>
  );
};

export default memo(UserList);
