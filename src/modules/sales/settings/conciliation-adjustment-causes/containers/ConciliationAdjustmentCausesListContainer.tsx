import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindConciliationAdjustmentCauses } from 'modules/sales/settings/conciliation-adjustment-causes/hooks/useFindConciliationAdjustmentCauses';
import { conciliationAdjustmentCausesColumns } from 'modules/sales/settings/conciliation-adjustment-causes/constants/conciliation-adjustment-causes.columns';
import { ConciliationAdjustmentCausesListToolbar } from 'modules/sales/settings/conciliation-adjustment-causes/components/ConciliationAdjustmentCausesListToolbar';
import ConciliationAdjustmentCausesEditModal from 'modules/sales/settings/conciliation-adjustment-causes/containers/ConciliationAdjustmentCausesEditModal';

const ConciliationAdjustmentCausesListContainer = () => {
  const { isLoading, error, data } = useFindConciliationAdjustmentCauses();
  return (
    <Box>
      <ConciliationAdjustmentCausesListToolbar />
      <Table
        columns={conciliationAdjustmentCausesColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <ConciliationAdjustmentCausesEditModal />
    </Box>
  );
};

export default memo(ConciliationAdjustmentCausesListContainer);
