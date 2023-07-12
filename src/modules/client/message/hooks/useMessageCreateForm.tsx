import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { messageSchema } from 'modules/client/message/schemas/message.schema';
import { IMessage } from 'modules/client/message/interfaces';
import { MessageService } from 'modules/client/message/services';
import { MESSAGES_LIST_KEY } from 'modules/client/message/constants';
import { useEffect } from 'react';

const initValues: IMessage = {
  name: '',
  email: '',
  status: '',
  assigned: '',
  // createdAt: '',
  active: true
};

const useMessageCreateForm = (onClose: () => void, defaultValues: IMessage = initValues) => {
  const { t } = useTranslation('message');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(messageSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (message: IMessage) => MessageService.saveOrUpdate(message),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([MESSAGES_LIST_KEY]);
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
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useMessageCreateForm;
