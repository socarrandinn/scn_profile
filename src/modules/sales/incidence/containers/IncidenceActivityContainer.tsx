import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { useFindAuditLogsByEntity } from 'modules/security/audit-logs/hooks/useFindAuditLogsByEntity';
import { TableProvider } from '@dfl/mui-admin-layout';
import { useIncidenceDetail } from '../context/IncidenceDetailContext';

const IncidenceActivityContainer = () => {
  const { incidenceId } = useIncidenceDetail();

  return (
    <TableProvider id={'incidence-history-change'} filters={auditLogFilters}>
      <AuditLogEntityProvider entityId={incidenceId} useHook={useFindAuditLogsByEntity}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </TableProvider>
  );
};

export default memo(IncidenceActivityContainer);
