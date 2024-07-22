import { memo } from 'react';
import { auditLogRobotTxtFilters } from 'modules/security/audit-logs/constants';
import { CenterPageLayout } from 'layouts/index';
import { useFindStaticSiteMapItemLogs } from '../hooks/useFindStaticSiteMapItemLogs';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { TableProvider } from '@dfl/mui-admin-layout';

const StaticSiteMapItem = () => {
  return (
    <CenterPageLayout>
      <TableProvider id={'static-site-map-audit-log'} filters={auditLogRobotTxtFilters}>
        <AuditLogEntityProvider useHook={useFindStaticSiteMapItemLogs}>
          <AuditLogHistoryChangeContainer />
        </AuditLogEntityProvider>
      </TableProvider>
    </CenterPageLayout>
  );
};

export default memo(StaticSiteMapItem);
