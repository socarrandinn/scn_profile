import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { AuditLogService } from 'modules/security/audit-logs/services';
import { AUDIT_LOG_BY_ENTITY_LIST_KEY } from 'modules/security/audit-logs/constants';
import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';

export const useFindClientActivity = (id?: string) => {
  const filters = useMemo(() => {
    return new TermFilter({
      field: 'payload.owner',
      value: id,
      objectId: true,
    }).toQuery();
  }, [id]);

  const { fetch, queryKey } = useTableRequest((params) =>
    AuditLogService.searchByUser(id as string, { ...params, filters }),
  );

  return useQuery([AUDIT_LOG_BY_ENTITY_LIST_KEY, filters, queryKey, id], fetch, {
    enabled: !!id,
  });
};
