import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import { useFindUsersTable } from 'modules/security/users/hooks/useFindUsersTable';
import { UserListToolbar } from 'modules/security/users/components/UserListToolbar';
import Box from '@mui/material/Box';
import { userSystemColumns } from 'modules/security/users/constants/user.columns';
import { USER_LIST_TYPES } from 'modules/security/users/constants/list-types.constant';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { ChildrenProps } from '@dfl/mui-react-common';

export type UserSystemListContainerProps = ChildrenProps & {
  type: SPACE_TYPE
  status: USER_LIST_TYPES
}

const UserTableContainer = ({ type, status, ...props }: UserSystemListContainerProps) => {
  const { isLoading, error, data } = useFindUsersTable(type, status);
  return (
    <Box>
      <UserListToolbar {...props} />
      <Table columns={userSystemColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error}
             select />
    </Box>
  );
};

export default memo(UserTableContainer);
