import { useQuery } from '@tanstack/react-query';
import { AuditLogService } from '../services';
import { AUDIT_LOG_BY_MODULE_AND_ENTITY_LIST_KEY } from '../constants';
import { useCallback } from 'react';

export const useFindAuditLogsByModuleAndEntity = (entityId: string, module: string) => {
  const fetch = useCallback(() => AuditLogService.searchByModuleEntity(entityId, module, {}), [entityId, module]);

  return useQuery([AUDIT_LOG_BY_MODULE_AND_ENTITY_LIST_KEY, module, entityId], fetch, {
    enabled: !!entityId && !!module,
  });
};
