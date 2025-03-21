import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindIncidences } from 'modules/sales/incidence/hooks/useFindIncidences';
import { incidenceColumns } from 'modules/sales/incidence/constants/incidence.columns';
import { IncidenceListToolbar } from 'modules/sales/incidence/components/IncidenceListToolbar';
import IncidenceEditModal from 'modules/sales/incidence/containers/IncidenceEditModal';

const IncidenceListContainer = () => {
  const { isLoading, error, data } = useFindIncidences();

  return (
    <Box>
      <IncidenceListToolbar />
      <Table
        columns={incidenceColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <IncidenceEditModal />
    </Box>
  );
};

export default memo(IncidenceListContainer);
