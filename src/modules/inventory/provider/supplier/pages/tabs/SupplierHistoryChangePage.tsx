import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import { HeaderFilterContext } from 'modules/security/audit-logs/context/HeaderFilterContext';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';

const SupplierHistoryChangePage = () => {
  const { providerProductsId } = useProviderProductsDetail();
  return (
    <HeaderFilterContext id={'supplier-report-sales'} filters={auditLogFilters} intervalFilter={'createdAt'}>
      <AuditLogEntityProvider entityId={providerProductsId as string}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </HeaderFilterContext>
  );
};

export default memo(SupplierHistoryChangePage);
