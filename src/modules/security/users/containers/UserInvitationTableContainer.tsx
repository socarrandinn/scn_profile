import { memo } from 'react';
import { HeadCell, Table, TableProvider } from '@dfl/mui-admin-layout';
import { UserListToolbar } from 'modules/security/users/components/UserListToolbar';
import Box from '@mui/material/Box';
import { userSystemColumns } from 'modules/security/users/constants/user.columns';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { ChildrenProps } from '@dfl/mui-react-common';
import { IUser } from '../interfaces/IUser';
import { filters } from 'modules/security/users/constants/filters';
import { useFindUsersInvitationTable } from 'modules/security/users/hooks/useFindUsersInvitationTable';

export type UserInvitationTableContainerProps = ChildrenProps & {
  type: SPACE_TYPE;
  columns: Array<HeadCell<IUser>>;
}

const UserInvitationTableContainer = ({ type, columns, ...props }: UserInvitationTableContainerProps) => {
  const { isLoading, error, data } = useFindUsersInvitationTable(type);

  return (
    <TableProvider id={'users'} filters={filters}>
      <Box>
        <UserListToolbar {...props} />
        <Table
          columns={userSystemColumns}
          data={data?.data}
          total={data?.total}
          isLoading={isLoading}
          error={error}
          select
        />
      </Box>
    </TableProvider>
  );
};

export default memo(UserInvitationTableContainer);
