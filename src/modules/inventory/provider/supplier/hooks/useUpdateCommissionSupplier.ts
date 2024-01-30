import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { commissionFormScheme } from '../schemas/commissionForm.schema';
import { SupplierService } from '../services';
import { ISupplier } from '../interfaces';

interface ICommissionForm {
  selectedSuppliers: ISupplier[];
  commission?: number;

  // Methods
  onClose: () => void;
}

const useUpdateCommissionSupplier = ({ onClose, selectedSuppliers }: ICommissionForm) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  console.log(selectedSuppliers);
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(commissionFormScheme),
    defaultValues: { suppliers: selectedSuppliers, commission: 0.3 },
  });

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    ({ selectedSuppliers, commission }: ICommissionForm) => {
    //   const suppliersIds = selectedSuppliers.map((supplier) => supplier._id);

      return SupplierService.update({
        // Payload random
        suppliers: selectedSuppliers,
        commission,
      });
    },
    {
      onSuccess: () => {
        toast.success(t('successCreatedUsers'));
        queryClient.invalidateQueries([`users-${''}`]);
        onClose?.();
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
