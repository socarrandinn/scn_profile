import { memo } from 'react';
import { HeaderFilterContext } from 'modules/security/audit-logs/context/HeaderFilterContext';
import { auditLogRobotTxtFilters } from 'modules/security/audit-logs/constants';
import { CenterPageLayout } from 'layouts/index';
import { useFindStaticSiteMapItemLogs } from '../hooks/useFindStaticSiteMapItemLogs';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';

const StaticSiteMapItem = () => {
  return (
    <CenterPageLayout>
      <HeaderFilterContext
        id={'static-site-map-history'}
        filters={auditLogRobotTxtFilters}
        intervalFilter={'createdAt'}
      >
        <AuditLogEntityProvider useHook={useFindStaticSiteMapItemLogs}>
          <AuditLogHistoryChangeContainer />
        </AuditLogEntityProvider>
      </HeaderFilterContext>
    </CenterPageLayout>
  );
};

export default memo(StaticSiteMapItem);
