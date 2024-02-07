import { memo } from 'react';
import SupplierHistoryChangeContainer from '../../containers/SupplierHistoryChangeContainer';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import { HeaderFilterContext } from 'modules/security/audit-logs/context/HeaderFilterContext';
import { supplierReportSaleFilters } from '../../constants';

const SupplierHistoryChange = () => {
  const { providerProductsId } = useProviderProductsDetail();
  return (
    <AuditLogEntityProvider entityId={providerProductsId as string}>
      <HeaderFilterContext
        id={'supplier-report-sales'}
        filters={supplierReportSaleFilters}
        intervalFilter={'createdAt'}
      >
        <SupplierHistoryChangeContainer />
      </HeaderFilterContext>
    </AuditLogEntityProvider>
  );
};

export default memo(SupplierHistoryChange);
