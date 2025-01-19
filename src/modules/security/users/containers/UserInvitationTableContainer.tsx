import { memo } from 'react';
import { HeadCell, Table } from '@dfl/mui-admin-layout';
import { UserListToolbar } from 'modules/security/users/components/UserListToolbar';
import Box from '@mui/material/Box';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useFindUsersInvitationTable } from 'modules/security/users/hooks/useFindUsersInvitationTable';
import { IUserInvite } from '../interfaces/IUserInvite';

export type UserInvitationTableContainerProps = ChildrenProps & {
  type: SPACE_TYPE;
  columns: Array<HeadCell<IUserInvite>>;
}

const UserInvitationTableContainer = ({ type, columns, ...props }: UserInvitationTableContainerProps) => {
  const { isLoading, error, data } = useFindUsersInvitationTable(type);

  return (
    <Box>
      <UserListToolbar {...props} />
      <Table
        columns={columns}
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
