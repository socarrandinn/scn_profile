import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindCausesIncidences } from 'modules/sales/settings/causes-incidence/hooks/useFindCausesIncidences';
import { causesIncidenceColumns } from 'modules/sales/settings/causes-incidence/constants/causes-incidence.columns';
import { CausesIncidenceListToolbar } from 'modules/sales/settings/causes-incidence/components/CausesIncidenceListToolbar';
import CausesIncidenceEditModal from 'modules/sales/settings/causes-incidence/containers/CausesIncidenceEditModal';

const CausesIncidenceListContainer = () => {
  const { isLoading, error, data } = useFindCausesIncidences();
  return (
    <Box>
      <TabsFilter translation={'causesIncidence'} defaultView={'all'} />
      <CausesIncidenceListToolbar />
      <Table
        columns={causesIncidenceColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <CausesIncidenceEditModal />
    </Box>
  );
};

export default memo(CausesIncidenceListContainer);
