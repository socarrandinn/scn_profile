import { useQuery } from '@tanstack/react-query';
import { AuditLogService } from '../services';
import { AUDIT_LOG_BY_ENTITY_LIST_KEY } from '../constants';
import { useAuditLogTableFilter } from './useAuditLogTableFilter';
import { useCallback } from 'react';
import { useHeaderFilterContext } from '../context/HeaderFilterContext';

export const useFindAuditLogsByEntity = (entityId: string) => {
  const payload = useAuditLogTableFilter()
  const { interval } = useHeaderFilterContext();

  const fetch = useCallback(
    () => AuditLogService.searchByEntity(entityId, { ...payload, interval }),
    [payload],
  );

  return useQuery([AUDIT_LOG_BY_ENTITY_LIST_KEY, payload, interval, entityId], fetch, { enabled: !!entityId });
};
