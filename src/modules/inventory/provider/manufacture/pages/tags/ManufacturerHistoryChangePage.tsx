import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { auditModuleLogFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { useFindAuditLogsByEntity } from 'modules/security/audit-logs/hooks/useFindAuditLogsByEntity';
import { TableProvider } from '@dfl/mui-admin-layout';
import { useManufactureDetailContext } from '../../context/ManufactureDetail';

const ManufacturerHistoryChangePage = () => {
  const { manufacturerId } = useManufactureDetailContext();

  return (
    <TableProvider id={'manufacturer-audit-log'} filters={auditModuleLogFilters}>
      <AuditLogEntityProvider entityId={manufacturerId as string} useHook={useFindAuditLogsByEntity}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </TableProvider>
  );
};

export default memo(ManufacturerHistoryChangePage);
