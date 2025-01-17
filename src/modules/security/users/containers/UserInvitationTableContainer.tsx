import { memo } from 'react';
import { HeadCell, Table } from '@dfl/mui-admin-layout';
import { UserListToolbar } from 'modules/security/users/components/UserListToolbar';
import Box from '@mui/material/Box';
import { userInvitationColumns } from 'modules/security/users/constants/user.columns';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { ChildrenProps } from '@dfl/mui-react-common';
import { IUser } from '../interfaces/IUser';
import { useFindUsersInvitationTable } from 'modules/security/users/hooks/useFindUsersInvitationTable';

export type UserInvitationTableContainerProps = ChildrenProps & {
  type: SPACE_TYPE;
  columns: Array<HeadCell<IUser>>;
}

const UserInvitationTableContainer = ({ type, columns, ...props }: UserInvitationTableContainerProps) => {
  const { isLoading, error, data } = useFindUsersInvitationTable(type);

  return (
    <Box>
      <UserListToolbar {...props} />
      <Table
        columns={userInvitationColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(UserInvitationTableContainer);
