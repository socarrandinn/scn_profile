import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EmployeeAvatarService } from 'modules/store/employee/employee-detail/common/services';

export const useUploadAvatar = (employeeId: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<any, any, any>((files) => {
    return EmployeeAvatarService.uploadAvatar(employeeId, files)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries([employeeId]);
    }
  });
  return mutation
};
