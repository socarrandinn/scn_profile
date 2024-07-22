import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { ROBOT_TXTS_LIST_KEY } from 'modules/cms/seo/robot-txt/constants';
import { AUDIT_LOG_MODULE_ENUM } from 'modules/security/audit-logs/constants/audit-log.status';
import { AuditLogService } from 'modules/security/audit-logs/services';

export const useFindStaticSiteMapItemLogs = () => {
  const { fetch, queryKey } = useTableRequest((params, config) =>
    AuditLogService.searchByModule(AUDIT_LOG_MODULE_ENUM.SEO_STATIC_PAGES_MODULE, params, config),
  );

  return useQuery([ROBOT_TXTS_LIST_KEY, AUDIT_LOG_MODULE_ENUM.SEO_STATIC_PAGES_MODULE, queryKey], fetch);
};
