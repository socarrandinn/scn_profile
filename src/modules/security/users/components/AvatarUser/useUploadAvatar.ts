import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserAvatarService } from 'modules/security/users/services';
import { USER_ME_KEY } from 'modules/security/users/constants/queries';

export const useUploadAvatar = (userId?: string) => {
  const queryClient = useQueryClient();
  return useMutation<any, any, any>((files) => {
    return UserAvatarService.uploadAvatar(userId, files);
  }, {
    onSuccess: () => {
      userId && queryClient.invalidateQueries([userId]);
      queryClient.invalidateQueries([USER_ME_KEY]);
    },
  });
};
