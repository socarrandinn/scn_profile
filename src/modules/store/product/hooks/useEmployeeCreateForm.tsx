import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IProduct, IProductCreate } from 'modules/store/common/interfaces';
import { ProductService } from 'modules/store/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/store/product/constants';
import { useEffect } from 'react';
import { productInitValue } from 'modules/store/product/constants/product-init-value.constant';
import { productSchema } from 'modules/store/product/schemas/product.schema';

const useProductCreateForm = (onClose: () => void, defaultValues: IProductCreate = productInitValue) => {
  const { t } = useTranslation('product');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, getValues, watch, setValue, formState } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (product: IProductCreate) => ProductService.save(product),
    {
      onSuccess: (data: IProduct, values) => {
        queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
        toast.success(t('successCreated'));
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
    formState,
    setValue,
    values: getValues(),
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useProductCreateForm;
