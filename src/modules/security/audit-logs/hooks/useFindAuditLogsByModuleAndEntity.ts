import { useQuery } from '@tanstack/react-query';
import { AuditLogService } from '../services';
import { AUDIT_LOG_BY_MODULE_AND_ENTITY_LIST_KEY } from '../constants';
import { useTableRequest } from '@dfl/mui-admin-layout';

export const useFindAuditLogsByModuleAndEntity = (entityId: string, module: string) => {
  const { fetch, queryKey } = useTableRequest((params, config) =>
    AuditLogService.searchByModuleEntity(entityId, module, params, config),
  );

  return useQuery([AUDIT_LOG_BY_MODULE_AND_ENTITY_LIST_KEY, queryKey], fetch, {
    enabled: !!entityId && !!module,
  });
};
