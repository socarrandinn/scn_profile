import { TableProvider } from '@dfl/mui-admin-layout';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { useFindAuditLogsByUser } from 'modules/security/audit-logs/hooks/useFindAuditLogsByUser';
import { memo } from 'react';
import { useParams } from 'react-router';

const ClientHistoryChange = () => {
  const { id } = useParams();

  return (
    <TableProvider id={'client-history-change'} filters={auditLogFilters}>
      <AuditLogEntityProvider entityId={id as string} useHook={useFindAuditLogsByUser}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </TableProvider>
  );
};

export default memo(ClientHistoryChange);
