import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { clientContactSchema } from 'modules/crm/clients/schemas/clients.schema';
import { IClients } from 'modules/crm/clients/interfaces';
import { ClientsService } from 'modules/crm/clients/services';
import { CLIENTS_LIST_KEY } from 'modules/crm/clients/constants';
import { useEffect } from 'react';

const initValues: Partial<IClients> = {
  email: '',
};

const useClientBasicForm = (onClose: () => void, defaultValues: Partial<IClients> = initValues) => {
  const { t } = useTranslation('clients');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(clientContactSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (clientContactInfo: Partial<IClients>) => ClientsService.saveOrUpdate(clientContactInfo),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([CLIENTS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
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
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useClientBasicForm;
