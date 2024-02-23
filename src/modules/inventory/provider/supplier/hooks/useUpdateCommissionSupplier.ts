import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { commissionFormScheme } from '../schemas/commissionForm.schema';
import { SupplierService } from '../services';
import { ICommissionUpdate } from '../interfaces';
import { useEffect } from 'react';
import { SUPPLIER_LIST_KEY } from '../constants';

const initValues: ICommissionUpdate = {
  commission: 0,
  suppliers: [],
};

const useUpdateCommissionSupplier = (onClose: () => void, defaultValues: ICommissionUpdate = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(commissionFormScheme),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation((values: any) => SupplierService.update(values), {
    onSuccess: () => {
      toast.success(t('successCreatedUsers'));
      queryClient.invalidateQueries([SUPPLIER_LIST_KEY]);
      onClose?.();
      reset();
    },
  });

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    values: formState.errors,
    handleSubmit,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate({ ...values, suppliers: values.suppliers.map((supplier) => supplier._id) });
    }),
  };
};

export default useUpdateCommissionSupplier;
