import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindCauseCancellations } from 'modules/sales/settings/cause-cancellation/hooks/useFindCauseCancellations';
import { causeCancellationColumns } from 'modules/sales/settings/cause-cancellation/constants/cause-cancellation.columns';
import { CauseCancellationListToolbar } from 'modules/sales/settings/cause-cancellation/components/CauseCancellationListToolbar';
import CauseCancellationEditModal from 'modules/sales/settings/cause-cancellation/containers/CauseCancellationEditModal';

const CauseCancellationListContainer = () => {
  const { isLoading, error, data } = useFindCauseCancellations();
  return (
    <Box>
      <CauseCancellationListToolbar />
      <Table
        columns={causeCancellationColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <CauseCancellationEditModal />
    </Box>
  );
};

export default memo(CauseCancellationListContainer);
