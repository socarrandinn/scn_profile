import { memo } from 'react';
import SupplierHistoryChangeContainer from '../../containers/SupplierHistoryChangeContainer';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import { HeaderFilterContext } from 'modules/security/audit-logs/context/HeaderFilterContext';
import { auditLogFilters } from 'modules/security/audit-logs/constants';

const SupplierHistoryChange = () => {
  const { providerProductsId } = useProviderProductsDetail();
  return (
    <HeaderFilterContext id={'supplier-report-sales'} filters={auditLogFilters} intervalFilter={'createdAt'}>
      <AuditLogEntityProvider entityId={providerProductsId as string}>
        <SupplierHistoryChangeContainer />
      </AuditLogEntityProvider>
    </HeaderFilterContext>
  );
};

export default memo(SupplierHistoryChange);
