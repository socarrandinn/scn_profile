import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { userSystemColumns } from 'modules/security/users/constants/user.columns';
import { UserTabsFilter } from 'modules/security/users/components/UserTabsFilter';
import { useDistributionCenterDetail } from '../context/DistributioncentersContext';
import { useFindUsersByDistributionCenter } from '../hooks/useFindUsersByDistributionCenter';
import { DistributionCenterUserListToolbar } from '../components/DistributionCenterUserListToolbar';

const DistributionCenterUserListContainer = () => {
  const { distributionCenterId } = useDistributionCenterDetail();
  const { isLoading, error, data } = useFindUsersByDistributionCenter(distributionCenterId);
  return (
    <Box>
      <UserTabsFilter />
      <DistributionCenterUserListToolbar />
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

export default memo(DistributionCenterUserListContainer);
