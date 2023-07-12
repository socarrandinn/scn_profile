import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindWorkLocations } from 'modules/store/employee/settings/work-location/hooks/useFindWorkLocations';
import { workLocationColumns } from 'modules/store/employee/settings/work-location/constants/work-location.columns';
import { WorkLocationListToolbar } from 'modules/store/employee/settings/work-location/components/WorkLocationListToolbar';
import WorkLocationEditModal from 'modules/store/employee/settings/work-location/containers/WorkLocationEditModal';

const WorkLocationListContainer = () => {
  const { isLoading, error, data } = useFindWorkLocations();
  return (
    <Box>
      <WorkLocationListToolbar />
      <Table
        columns={workLocationColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <WorkLocationEditModal />
    </Box>
  );
};

export default memo(WorkLocationListContainer);
