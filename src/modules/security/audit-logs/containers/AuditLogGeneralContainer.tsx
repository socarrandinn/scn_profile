import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { HeaderFilterContext } from 'modules/security/audit-logs/context/HeaderFilterContext';
import { auditLogAllFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { useParams } from 'react-router';
import { useFindAuditLogs } from '../hooks/useFindAllAuditLogs';

const AuditLogGeneralContainer = () => {
  const { id } = useParams();

  return (
    <HeaderFilterContext id={'role-history-change'} filters={auditLogAllFilters} intervalFilter={'createdAt'}>
      <AuditLogEntityProvider entityId={id} useHook={useFindAuditLogs}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </HeaderFilterContext>
  );
};

export default memo(AuditLogGeneralContainer);
