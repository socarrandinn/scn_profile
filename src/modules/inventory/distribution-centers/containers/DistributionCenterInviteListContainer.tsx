import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindDistributionCenterUsersInvites } from 'modules/security/users-invite/hooks/useFindUsersInvites';
import { usersInviteColumns } from 'modules/security/users-invite/constants/users-invite.columns';
import { useDistributionCenterDetail } from '../context/DistributioncentersContext';

const DistributionCenterInviteListContainer = () => {
  const { distributionCenterId } = useDistributionCenterDetail();
  const { isLoading, error, data } = useFindDistributionCenterUsersInvites(distributionCenterId);
  return (
    <Box>
      <TabsFilter translation={'users'} defaultView={'all'} />

      <Table
        columns={usersInviteColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        // select
      />
    </Box>
  );
};

export default memo(DistributionCenterInviteListContainer);
