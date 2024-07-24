import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { disallowedWordSchema } from 'modules/crm/disallowed-word/schemas/disallowed-word.schema';
import { IDisallowedWord } from 'modules/crm/disallowed-word/interfaces';
import { DisallowedWordService } from 'modules/crm/disallowed-word/services';
import { DISALLOWED_WORDS_LIST_KEY } from 'modules/crm/disallowed-word/constants';
import { useEffect, useCallback } from 'react';

const initValues: IDisallowedWord = {
  word: '',
};

const useDisallowedWordCreateForm = (onClose: () => void, defaultValues: IDisallowedWord = initValues) => {
  const { t } = useTranslation('disallowedWord');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset: resetForm } = useForm({
    resolver: yupResolver(disallowedWordSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, reset: resetMutation, error, isLoading, isSuccess, data } = useMutation(
    (disallowedWord: IDisallowedWord) => DisallowedWordService.saveOrUpdate(disallowedWord),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([DISALLOWED_WORDS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
        resetForm();
      },
    },
  );

  const reset = useCallback(
    () => {
      resetForm()
      resetMutation()
    },
    [resetForm, resetMutation],
  )

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
export default useDisallowedWordCreateForm;
