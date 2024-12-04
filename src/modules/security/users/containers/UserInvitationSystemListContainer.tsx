import { Table } from '@dfl/mui-admin-layout';
import { UserListToolbar } from 'modules/security/users/components/UserListToolbar';
import Box from '@mui/material/Box';
import { userSystemColumns } from 'modules/security/users/constants/user.columns';
import UserEditModal from './UserEditModal';
import { useFindUsersInvitationTable } from 'modules/security/users/hooks/useFindUsersInvitationTable';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

export type UserInvitationSystemProps = {
  type: SPACE_TYPE
}

const UserInvitationSystemListContainer = ({ type }: UserInvitationSystemProps) => {
  const { isLoading, error, data } = useFindUsersInvitationTable(type);
  return (
    <Box>
      <UserListToolbar />
      <Table columns={userSystemColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error}
             select />
      <UserEditModal />
    </Box>
  );
};

export default UserInvitationSystemListContainer;
