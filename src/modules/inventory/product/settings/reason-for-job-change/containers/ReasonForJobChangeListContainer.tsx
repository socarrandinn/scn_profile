import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindReasonForJobChanges } from 'modules/inventory/product/settings/reason-for-job-change/hooks/useFindReasonForJobChanges';
import { reasonForJobChangeColumns } from 'modules/inventory/product/settings/reason-for-job-change/constants/reason-for-job-change.columns';
import ReasonForJobChangeEditModal from 'modules/inventory/product/settings/reason-for-job-change/containers/ReasonForJobChangeEditModal';
import { ReasonForJobChangeListToolbar } from 'modules/inventory/product/settings/reason-for-job-change/components/ReasonForJobChangeListToolbar';

const ReasonForJobChangeListContainer = () => {
  const { isLoading, error, data } = useFindReasonForJobChanges();
  return (
    <Box>
      <ReasonForJobChangeListToolbar />
      <Table
        columns={reasonForJobChangeColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <ReasonForJobChangeEditModal />
    </Box>
  );
};

export default memo(ReasonForJobChangeListContainer);
