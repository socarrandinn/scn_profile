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
import { useFindTagByRequired } from 'modules/inventory/settings/tags/hooks/useFindTags';
import { TAG_NAMES } from 'modules/inventory/settings/tags/interfaces';
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
  otherTags: [],
  // selectedTag: [],
};

const useSupplierCreateForm = (onClose: () => void, defaultValues: Partial<ISupplier> = initValues) => {
  const { t } = useTranslation('supplier');
  const { data: list } = useFindTagByRequired(TAG_NAMES.SUPPLIER);
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
    if (list?.data) {
      setValue('tags', list?.data);
    }
  }, [setValue, list?.data]);

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

  const tags = watch('tags');

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    tags,
    reset,
    watch,
    setValue,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      const { tags, otherTags, selectedTag, ...rest } = values;
      mutate({ ...rest, tags: parseTagList(tags || [], otherTags || []) });
    }),
  };
};
export default useSupplierCreateForm;
