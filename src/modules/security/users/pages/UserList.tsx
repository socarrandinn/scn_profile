import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import UserTableContainer, { UserTableContainerProps } from '../containers/UserTableContainer';
import { userFilters } from '../constants/user-filters';

const UserList = ({ type, status }: UserTableContainerProps) => {
  return (
    <TableProvider id={`user-list-${type}`} filters={userFilters}>
      <UserTableContainer type={type} status={status} columns={[]} />
    </TableProvider>
  );
};

export default memo(UserList);
