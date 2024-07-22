import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { useProductDetail } from '../contexts/ProductDetail';
import { useFindAuditLogsByEntity } from 'modules/security/audit-logs/hooks/useFindAuditLogsByEntity';
import { TableProvider } from '@dfl/mui-admin-layout';

const ProductHistoryChangeContainer = () => {
  const { id } = useProductDetail();

  return (
    <TableProvider id={'product-history-change'} filters={auditLogFilters}>
      <AuditLogEntityProvider entityId={id} useHook={useFindAuditLogsByEntity}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </TableProvider>
  );
};

export default memo(ProductHistoryChangeContainer);
