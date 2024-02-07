import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { AuditLogHistoryChanges } from 'modules/security/audit-logs/components/AuditLogHistoryChange';
import { Grid } from '@mui/material';
import { AuditLogHistoryChangeSummary } from 'modules/security/audit-logs/components/AuditLogHistoryChangeSummary';

const SupplierHistoryChangeContainer = () => {
  return (
    <PageLayout mt={0}>
      <Grid container spacing={{ xs: 1, md: 3 }}>
        <Grid item xs={12} md={6} lg={5}>
          <AuditLogHistoryChanges />
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <AuditLogHistoryChangeSummary />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default memo(SupplierHistoryChangeContainer);
