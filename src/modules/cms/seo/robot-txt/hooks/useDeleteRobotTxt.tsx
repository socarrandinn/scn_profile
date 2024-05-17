import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RobotTxtService } from 'modules/cms/seo/robot-txt/services';
import { ROBOT_TXTS_LIST_KEY } from 'modules/cms/seo/robot-txt/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteRobotTxt = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('robotTxt');
  return useMutation(() => RobotTxtService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([ROBOT_TXTS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
