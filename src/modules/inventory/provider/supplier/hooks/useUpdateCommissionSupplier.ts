import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { commissionFormScheme } from '../schemas/commissionForm.schema';
import { SupplierService } from '../services';
import { useTableSelection } from '@dfl/mui-admin-layout';

interface ICommissionForm {
  ids?: string[];
  commission?: number;
}

const useUpdateCommissionSupplier = () => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { selected, clearSelection } = useTableSelection();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(commissionFormScheme),
    defaultValues: { ids: selected, commission: 0.3 },
  });

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
  } = useMutation(
    ({ commission }: ICommissionForm) => {
      return SupplierService.update({
        users: selected,
        commission,
      });
    },
    {
      onSuccess: () => {
        toast.success(t('successCreatedUsers'));
        clearSelection();
        queryClient.invalidateQueries([`users-${selected}`]);
        // onClose?.();
        reset();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    values: formState.errors,
    // @ts-ignore
    onSubmit: handleSubmit((values: ICommissionForm) => {
      mutate(values);
    }),
  };
};
// @ts-ignore
export default useUpdateCommissionSupplier;
