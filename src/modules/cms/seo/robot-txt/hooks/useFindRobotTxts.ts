import { useQuery } from '@tanstack/react-query';
import { RobotTxtService } from 'modules/cms/seo/robot-txt/services';
import { ROBOT_TXTS_LIST_KEY } from 'modules/cms/seo/robot-txt/constants';
import { useAuditLogTableFilter } from 'modules/security/audit-logs/hooks/useAuditLogTableFilter';
import { useTableRequest } from '@dfl/mui-admin-layout';

export const useFindRobotTxts = () => {
  const { filters, page, size } = useAuditLogTableFilter();
  const payload = {
    filters,
    size,
    page: page ? page + 1 : page,
  };

  const { fetch, queryKey } = useTableRequest(RobotTxtService.search, {}, payload);

  return useQuery([ROBOT_TXTS_LIST_KEY, queryKey, size, page], fetch);
};
