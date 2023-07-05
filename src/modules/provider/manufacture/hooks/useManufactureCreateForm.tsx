import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { manufactureSchema } from 'modules/provider/manufacture/schemas/manufacture.schema';
import { IManufacture } from 'modules/provider/manufacture/interfaces';
import { ManufactureService } from 'modules/provider/manufacture/services';
import { MANUFACTURES_LIST_KEY } from 'modules/provider/manufacture/constants';
import { useEffect } from 'react';

const initValues: IManufacture = {
  name: '',
  avatar: {
    url: '',
    thumb: '',
    width: 0,
  },
  state: false,
  brand: [],
};

const useManufactureCreateForm = (onClose: () => void, defaultValues: IManufacture = initValues) => {
  const { t } = useTranslation('manufacture');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(manufactureSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (manufacture: IManufacture) => ManufactureService.saveOrUpdate(manufacture),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([MANUFACTURES_LIST_KEY]);
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
    values: formState.errors,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
// @ts-ignore
export default useManufactureCreateForm;
