import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ReportCauseService } from 'modules/crm/report-cause/services';
import { REPORT_CAUSES_LIST_KEY } from 'modules/crm/report-cause/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteReportCause = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('reportCause');
  return useMutation(() => ReportCauseService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([REPORT_CAUSES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
