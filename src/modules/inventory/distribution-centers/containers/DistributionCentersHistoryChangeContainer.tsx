import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { useDistributionCenterDetail } from '../context/DistributioncentersContext';
import { useFindAuditLogsByEntity } from 'modules/security/audit-logs/hooks/useFindAuditLogsByEntity';
import { TableProvider } from '@dfl/mui-admin-layout';

const DistributionCentersHistoryChangeContainer = () => {
  const { distributionCenterId } = useDistributionCenterDetail();

  return (
    <TableProvider id={'distribution-center-audit-log'} filters={auditLogFilters}>
      <AuditLogEntityProvider entityId={distributionCenterId} useHook={useFindAuditLogsByEntity}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </TableProvider>
  );
};

export default memo(DistributionCentersHistoryChangeContainer);
