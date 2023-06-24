import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserAvatarService } from 'modules/security/users/services';

export const useUploadAvatar = (userId: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<any, any, any>((files) => {
    return UserAvatarService.uploadAvatar(userId, files)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries([userId]);
    }
  });
  return mutation
};
