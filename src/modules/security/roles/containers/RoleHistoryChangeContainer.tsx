import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { useFindAuditLogsByEntity } from 'modules/security/audit-logs/hooks/useFindAuditLogsByEntity';
import { useParams } from 'react-router';
import { TableProvider } from '@dfl/mui-admin-layout';

const RoleHistoryChangeContainer = () => {
  const { id } = useParams();

  return (
    <TableProvider id={'role-audit-log'} filters={auditLogFilters}>
      <AuditLogEntityProvider entityId={id} useHook={useFindAuditLogsByEntity}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </TableProvider>
  );
};

export default memo(RoleHistoryChangeContainer);
