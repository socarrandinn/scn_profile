import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { supplierSchema } from 'modules/inventory/provider/supplier/schemas/supplier.schema';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { SupplierService } from 'modules/inventory/provider/supplier/services';
import { SUPPLIER_LIST_KEY } from 'modules/inventory/provider/supplier/constants';
import { useEffect } from 'react';
import { addressWithLocationInitValue, emailInitValue, phoneInitValue } from 'modules/common/constants';
import { useFindTagsByProvider } from 'modules/inventory/settings/tags/hooks/useFindTags';
import { TAG_PROVIDER_ENUM } from 'modules/inventory/settings/tags/interfaces';
import { parseTagList } from 'modules/inventory/settings/tags/utils/parser-tags';

const initValues: Partial<ISupplier> = {
  name: '',
  code: '',
  active: true,
  contacts: {
    phones: [phoneInitValue],
    emails: [emailInitValue],
  },
  commission: 0.0,
  address: addressWithLocationInitValue,
  tags: [],
  otherTags: null,
};

const useProductsCreateForm = (onClose: () => void, defaultValues: Partial<ISupplier> = initValues) => {
  const { t } = useTranslation('supplier');
  const { data: tags } = useFindTagsByProvider(TAG_PROVIDER_ENUM.PRODUCT);
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(supplierSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  useEffect(() => {
    if (tags?.data) {
      setValue('tags', tags?.data);
    }
  }, [setValue, tags?.data]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (supplierUsers: Partial<ISupplier>) => SupplierService.saveOrUpdate(supplierUsers),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([SUPPLIER_LIST_KEY]);
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
    watch,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      const { tags, otherTags, ...rest } = values;
      mutate({ ...rest, tags: parseTagList(tags || [], otherTags || []) });
    }),
  };
};
export default useProductsCreateForm;
