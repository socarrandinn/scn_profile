import { useQuery } from '@tanstack/react-query';
import { AuditLogService } from '../services';
import { AUDIT_LOG_LIST_KEY } from '../constants';
import { useTableRequest } from '@dfl/mui-admin-layout';

export const useFindAuditLogs = () => {
  const { fetch, queryKey } = useTableRequest(AuditLogService.search);
  return useQuery([AUDIT_LOG_LIST_KEY, queryKey], fetch);
};
