import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { logisticsSchema } from 'modules/inventory/provider/logistics/schemas/logistics.schema';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { LogisticsService } from 'modules/inventory/provider/logistics/services';
import { LOGISTICS_LIST_KEY } from 'modules/inventory/provider/logistics/constants';
import { addressWithLocationInitValue, emailInitValue, phoneInitValue } from 'modules/common/constants';
import { parseTagList } from 'modules/inventory/settings/tags/utils/parser-tags';

const initValues: ILogistics = {
  name: '',
  code: '',
  active: true,
  contacts: {
    phones: [phoneInitValue],
    emails: [emailInitValue],
  },
  commission: 0.0,
  handlingCost: 0.0,
  address: addressWithLocationInitValue,
  tags: null,
};

const useLogisticsCreateForm = (onClose: () => void, defaultValues: ILogistics = initValues) => {
  const { t } = useTranslation('logistics');
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { control, handleSubmit, reset, watch, formState, setValue } = useForm({
    resolver: yupResolver(logisticsSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (logistics: ILogistics) => LogisticsService.saveOrUpdate(logistics),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([LOGISTICS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        navigate('/inventory/settings/logistics');
        onClose?.();
        reset();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    formState,
    isSuccess,
    setValue,
    data,
    reset,
    watch,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      const { tags, ...rest } = values;
      mutate({ ...rest, tags: parseTagList(tags || [], []) });
    }),
  };
};
export default useLogisticsCreateForm;
