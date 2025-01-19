import { memo, useMemo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import UserTableContainer, { UserTableContainerProps } from '../containers/UserTableContainer';
import { userFilters } from '../constants/user-filters';

const UserList = ({ type, status }: UserTableContainerProps) => {
  const filters = useMemo(() => userFilters(type), [type]);

  return (
    <TableProvider id={`user-list-${type}`} filters={filters}>
      <UserTableContainer type={type} status={status} columns={[]} />
    </TableProvider>
  );
};

export default memo(UserList);
