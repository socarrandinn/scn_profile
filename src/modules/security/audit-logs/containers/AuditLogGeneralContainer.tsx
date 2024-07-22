import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { auditLogAllFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { useParams } from 'react-router';
import { useFindAuditLogs } from '../hooks/useFindAllAuditLogs';
import { TableProvider } from '@dfl/mui-admin-layout';

const AuditLogGeneralContainer = () => {
  const { id } = useParams();

  return (
    <TableProvider id={'general-audit-log'} filters={auditLogAllFilters}>
      <AuditLogEntityProvider entityId={id} useHook={useFindAuditLogs}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </TableProvider>
  );
};

export default memo(AuditLogGeneralContainer);
