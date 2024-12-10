import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import { useFindUsersTable } from 'modules/security/users/hooks/useFindUsersTable';
import { UserListToolbar } from 'modules/security/users/components/UserListToolbar';
import Box from '@mui/material/Box';
import { userSystemColumns } from 'modules/security/users/constants/user.columns';
import { USER_LIST_TYPES } from 'modules/security/users/constants/list-types.constant';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

export type UserSystemListContainerProps = {
  type: SPACE_TYPE
  status: USER_LIST_TYPES,
}

const UserSystemListContainer = ({ type, status }: UserSystemListContainerProps) => {
  const { isLoading, error, data } = useFindUsersTable(type, status);
  return (
    <Box>
       <UserListToolbar />
      <Table columns={userSystemColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error}
             select />
    </Box>
  );
};

export default memo(UserSystemListContainer);
