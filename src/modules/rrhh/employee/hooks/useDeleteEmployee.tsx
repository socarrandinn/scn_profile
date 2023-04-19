import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EmployeeService } from 'modules/rrhh/employee/services';
import { EMPLOYEES_LIST_KEY } from 'modules/rrhh/employee/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteEmployee = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('employee');
  return useMutation(() => EmployeeService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([EMPLOYEES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
