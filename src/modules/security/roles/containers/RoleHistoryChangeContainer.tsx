import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { HeaderFilterContext } from 'modules/security/audit-logs/context/HeaderFilterContext';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { useFindAuditLogsByEntity } from 'modules/security/audit-logs/hooks/useFindAuditLogsByEntity';
import { useParams } from 'react-router';

const RoleHistoryChangeContainer = () => {
  const { id } = useParams();

  return (
    <HeaderFilterContext id={'role-history-change'} filters={auditLogFilters} intervalFilter={'createdAt'}>
      <AuditLogEntityProvider entityId={id} useHook={useFindAuditLogsByEntity}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </HeaderFilterContext>
  );
};

export default memo(RoleHistoryChangeContainer);
