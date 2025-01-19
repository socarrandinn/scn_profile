import { memo, useMemo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import UserTableContainer, { UserTableContainerProps } from '../containers/UserTableContainer';
import { userFilters } from '../constants/user-filters';
import { SPACE_TYPE } from '../constants/space-types.constants';

const UserList = ({ type, status }: UserTableContainerProps) => {
  const filters = useMemo(() => userFilters(type as SPACE_TYPE), [type]);

  return (
    <TableProvider id={`user-list-${type}`} filters={userFilters(type)}>
      <UserTableContainer type={type} status={status} columns={[]} />
    </TableProvider>
  );
};

export default memo(UserList);
