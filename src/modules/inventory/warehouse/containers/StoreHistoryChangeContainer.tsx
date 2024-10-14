import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { useWarehouseDetail } from '../context/WarehouseContext';
import { useFindAuditLogsByEntity } from 'modules/security/audit-logs/hooks/useFindAuditLogsByEntity';
import { TableProvider } from '@dfl/mui-admin-layout';

const StoreHistoryChangeContainer = () => {
  const { warehouseId } = useWarehouseDetail();

  return (
    <TableProvider id={'warehouse-audit-log'} filters={auditLogFilters}>
      <AuditLogEntityProvider entityId={warehouseId} useHook={useFindAuditLogsByEntity}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </TableProvider>
  );
};

export default memo(StoreHistoryChangeContainer);
