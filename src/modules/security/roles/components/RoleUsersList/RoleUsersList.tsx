import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindUsersByRole } from 'modules/security/users/hooks/useFindUsersByRole';
import { RoleUserListToolbar } from 'modules/security/roles/components/RoleUserListToolbar';
import { userSystemColumns } from 'modules/security/users/constants/user.columns';
import { UserTabsFilter } from 'modules/security/users/components/UserTabsFilter';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

type RoleUsersListProps = {
  roleId: string;
  type: SPACE_TYPE;
};

const RoleUsersList = ({ roleId, type }: RoleUsersListProps) => {
  const { isLoading, error, data } = useFindUsersByRole(roleId, type);
  return (
    <Box>
      <UserTabsFilter />
      <RoleUserListToolbar roleId={roleId} />
      <Table
        columns={userSystemColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(RoleUsersList);
