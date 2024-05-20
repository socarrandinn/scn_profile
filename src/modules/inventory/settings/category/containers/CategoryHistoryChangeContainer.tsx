import { memo } from 'react';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { HeaderFilterContext } from 'modules/security/audit-logs/context/HeaderFilterContext';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { useCategoryDetail } from 'modules/inventory/settings/category/context/CategoryDetailContext';
import { useFindAuditLogsByEntity } from 'modules/security/audit-logs/hooks/useFindAuditLogsByEntity';

const CategoryHistoryChangeContainer = () => {
  const { categoryId } = useCategoryDetail();
  return (
    <HeaderFilterContext id={'category-report-sales'} filters={auditLogFilters} intervalFilter={'createdAt'}>
      <AuditLogEntityProvider entityId={categoryId as string} useHook={useFindAuditLogsByEntity}>
        <AuditLogHistoryChangeContainer />
      </AuditLogEntityProvider>
    </HeaderFilterContext>
  );
};

export default memo(CategoryHistoryChangeContainer);
