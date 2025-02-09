import { useQuery } from '@tanstack/react-query';
import { AuditLogService } from '../services';
import { AUDIT_LOG_BY_ENTITY_LIST_KEY } from '../constants';
import { useTableRequest } from '@dfl/mui-admin-layout';

export const useFindAuditLogsByUser = (id?: string) => {
  const { fetch, queryKey } = useTableRequest((params, config) =>
    AuditLogService.searchByUser(id as string, params, config),
  );

  return useQuery([AUDIT_LOG_BY_ENTITY_LIST_KEY, queryKey, id], fetch, {
    enabled: !!id,
  });
};
