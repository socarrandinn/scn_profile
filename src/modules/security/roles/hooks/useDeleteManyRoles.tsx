import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { RoleService } from 'modules/security/roles/services';
import { invalidateRoleListQuery } from 'modules/security/roles/services/util.service';

export const useDeleteManyRoles = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('role');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    () => {
      if (selected?.length) {
        return RoleService.deleteMany(selected as string[]);
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successDeletedRoles'));
        clearSelection();
        invalidateRoleListQuery(queryClient);
      },
      onError: (error: any) => {
        if (error.reference === 'MD000') {
          toast.error(t('common:errors.needSelection'));
        } else {
          toast.error(t('common:errors.generalErrorMessage'));
        }
      },
    },
  );
};
