import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindReasonForCompensationChanges } from 'modules/store/employee/settings/reason-for-compensation-change/hooks/useFindReasonForCompensationChanges';
import { reasonForCompensationChangeColumns } from 'modules/store/employee/settings/reason-for-compensation-change/constants/reason-for-compensation-change.columns';
import ReasonForCompensationChangeEditModal from 'modules/store/employee/settings/reason-for-compensation-change/containers/ReasonForCompensationChangeEditModal';
import { ReasonForCompensationChangeListToolbar } from 'modules/store/employee/settings/reason-for-compensation-change/components/ReasonForCompensationChangeListToolbar';

const ReasonForCompensationChangeListContainer = () => {
  const { isLoading, error, data } = useFindReasonForCompensationChanges();
  return (
    <Box>
      <ReasonForCompensationChangeListToolbar />
      <Table
        columns={reasonForCompensationChangeColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <ReasonForCompensationChangeEditModal />
    </Box>
  );
};

export default memo(ReasonForCompensationChangeListContainer);
