import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { useFindAuditLogsByEntity } from 'modules/security/audit-logs/hooks/useFindAuditLogsByEntity';
import { TableProvider } from '@dfl/mui-admin-layout';

const LogisticHistoryChangePage = () => {
  const { logisticId } = useLogisticsDetailContext();
  return (
    <TableProvider id={'logistic-audit-log'} filters={auditLogFilters}>
      <AuditLogEntityProvider entityId={logisticId as string} useHook={useFindAuditLogsByEntity}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </TableProvider>
  );
};

export default memo(LogisticHistoryChangePage);
