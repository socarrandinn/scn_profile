import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { AuditLogHistoryChanges } from 'modules/security/audit-logs/components/AuditLogHistoryChange';
import { Grid } from '@mui/material';
import { AuditLogHistoryChangeSummaryTable } from 'modules/security/audit-logs/components/AuditLogHistoryChangeSummary';
import AuditLogHistoryChangeSummaryDetails from '../components/AuditLogHistoryChangeSummary/AuditLogHistoryChangeSummaryDetails';

const AuditLogHistoryChangeContainer = () => {
  return (
    <PageLayout mt={0} mb={4}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={12} md={6} lg={5}>
          <AuditLogHistoryChanges />
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <AuditLogHistoryChangeSummaryDetails/>
          <AuditLogHistoryChangeSummaryTable />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default memo(AuditLogHistoryChangeContainer);
