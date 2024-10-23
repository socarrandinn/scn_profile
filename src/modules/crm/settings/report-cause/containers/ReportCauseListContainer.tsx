import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindReportCauses } from 'modules/crm/settings/report-cause/hooks/useFindReportCauses';
import { reportCauseColumns } from 'modules/crm/settings/report-cause/constants/report-cause.columns';
import { ReportCauseListToolbar } from 'modules/crm/settings/report-cause/components/ReportCauseListToolbar';
import ReportCauseEditModal from 'modules/crm/settings/report-cause/containers/ReportCauseEditModal';

const ReportCauseListContainer = () => {
  const { isLoading, error, data } = useFindReportCauses(true);
  return (
    <Box>
      <ReportCauseListToolbar />
      <Table
        columns={reportCauseColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <ReportCauseEditModal />
    </Box>
  );
};

export default memo(ReportCauseListContainer);
