import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { HeaderFilterContext } from 'modules/security/audit-logs/context/HeaderFilterContext';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { useStoreDetail } from '../context/StoreContext';

const StoreHistoryChangeContainer = () => {
  const { storeId } = useStoreDetail();

  return (
    <HeaderFilterContext id={'store-report-sales'} filters={auditLogFilters} intervalFilter={'createdAt'}>
      <AuditLogEntityProvider entityId={storeId}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </HeaderFilterContext>
  );
};

export default memo(StoreHistoryChangeContainer);
