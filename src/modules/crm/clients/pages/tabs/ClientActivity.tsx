import { TableProvider } from '@dfl/mui-admin-layout';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { memo } from 'react';
import { useParams } from 'react-router';
import { useFindClientActivity } from '../../hooks/useFindClientActivity';

const ClientActivity = () => {
  const { id } = useParams();

  return (
    <TableProvider id={'client-activity'} filters={auditLogFilters}>
      <AuditLogEntityProvider entityId={id as string} useHook={useFindClientActivity}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </TableProvider>
  );
};

export default memo(ClientActivity);
