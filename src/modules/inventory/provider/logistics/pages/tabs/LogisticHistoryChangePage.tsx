import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { HeaderFilterContext } from 'modules/security/audit-logs/context/HeaderFilterContext';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';

const LogisticHistoryChangePage = () => {
  const { logisticId } = useLogisticsDetailContext();
  return (
    <HeaderFilterContext id={'supplier-report-sales'} filters={auditLogFilters} intervalFilter={'createdAt'}>
      <AuditLogEntityProvider entityId={logisticId as string}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </HeaderFilterContext>
  );
};

export default memo(LogisticHistoryChangePage);
