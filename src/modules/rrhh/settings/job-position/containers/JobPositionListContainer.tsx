import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindJobPositions } from 'modules/rrhh/settings/job-position/hooks/useFindJobPositions';
import { jobPositionColumns } from 'modules/rrhh/settings/job-position/constants/jobPosition.columns';
import { JobPositionListToolbar } from 'modules/rrhh/settings/job-position/components/JobPositionListToolbar';
import JobPositionEditModal from 'modules/rrhh/settings/job-position/containers/JobPositionEditModal';

const JobPositionListContainer = () => {
  const { isLoading, error, data } = useFindJobPositions();
  return (
    <Box>
      <JobPositionListToolbar />
      <Table
        columns={jobPositionColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <JobPositionEditModal />
    </Box>
  );
};

export default memo(JobPositionListContainer);
