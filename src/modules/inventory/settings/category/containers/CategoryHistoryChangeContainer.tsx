import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { useCategoryDetail } from 'modules/inventory/settings/category/context/CategoryDetailContext';
import { useFindAuditLogsByEntity } from 'modules/security/audit-logs/hooks/useFindAuditLogsByEntity';
import { TableProvider } from '@dfl/mui-admin-layout';

const CategoryHistoryChangeContainer = () => {
  const { categoryId } = useCategoryDetail();
  return (
    <TableProvider id={'category-audit-log'} filters={auditLogFilters}>
      <AuditLogEntityProvider entityId={categoryId as string} useHook={useFindAuditLogsByEntity}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </TableProvider>
  );
};

export default memo(CategoryHistoryChangeContainer);
