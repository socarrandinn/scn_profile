import { useQuery } from '@tanstack/react-query';
import { ROBOT_TXTS_LIST_KEY } from 'modules/cms/seo/robot-txt/constants';
import { AUDIT_LOG_MODULE_ENUM } from 'modules/security/audit-logs/constants/audit-log.status';
import { useAuditLogTableFilter } from 'modules/security/audit-logs/hooks/useAuditLogTableFilter';
import { AuditLogService } from 'modules/security/audit-logs/services';
import { useCallback } from 'react';

export const useFindRobotTxts = () => {
  const { page, size, filters, search } = useAuditLogTableFilter();
  const payload = {
    filters,
    search,
    size,
    page: page ? page + 1 : page,
  };

  const fetch = useCallback(
    () => AuditLogService.searchByModule(AUDIT_LOG_MODULE_ENUM.SEO_ROBOT_MODULE, payload),
    [payload],
  );

  return useQuery([ROBOT_TXTS_LIST_KEY, AUDIT_LOG_MODULE_ENUM.SEO_ROBOT_MODULE, search, size, page, filters], fetch);
};
