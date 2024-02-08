import { useQuery } from '@tanstack/react-query';
import { AuditLogService } from '../services';
import { AUDIT_LOG_BY_ENTITY_LIST_KEY } from '../constants';
import { useAuditLogTableFilter } from './useAuditLogTableFilter';
import { useCallback } from 'react';
import { useHeaderFilterContext } from '../context/HeaderFilterContext';

export const useFindAuditLogsByEntity = (entityId: string) => {
  const { filters, page, search, size } = useAuditLogTableFilter();
  const { interval } = useHeaderFilterContext();

  const payload = {
    filters,
    search,
    size,
    page: page ? page + 1 : page,
  };

  const fetch = useCallback(() => AuditLogService.searchByEntity(entityId, { ...payload, interval }), [payload]);

  return useQuery([AUDIT_LOG_BY_ENTITY_LIST_KEY, payload, interval, entityId], fetch, {
    enabled: !!entityId,
  });
};
