import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { useFindAuditLogsByEntity } from 'modules/security/audit-logs/hooks/useFindAuditLogsByEntity';
import { TableProvider } from '@dfl/mui-admin-layout';

const SupplierHistoryChangePage = () => {
  const { providerProductsId } = useProviderProductsDetail();

  return (
    <TableProvider id={'supplier-audit-log'} filters={auditLogFilters}>
      <AuditLogEntityProvider entityId={providerProductsId as string} useHook={useFindAuditLogsByEntity}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </TableProvider>
  );
};

export default memo(SupplierHistoryChangePage);
