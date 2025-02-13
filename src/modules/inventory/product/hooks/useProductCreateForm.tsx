import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { PRODUCT_LIST_KEY } from 'modules/inventory/product/constants/query-keys';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { IProductCreate, IRegion } from 'modules/inventory/product/interfaces/IProductCreate';
import { productSchema } from 'modules/inventory/product/schemas/product.schema';
import { productInitValue } from 'modules/inventory/product/constants/product-init-value.constant';
import { ProductService } from 'modules/inventory/product/services';
import { useFindTagByRequired } from 'modules/inventory/settings/tags/hooks/useFindTags';
import { getTagDefaultValue, parseTagList } from 'modules/inventory/settings/tags/utils/parser-tags';
import { scrollToFirstError } from 'utils/error-utils';

const useProductCreateForm = (onClose?: () => void, defaultValues: Partial<IProductCreate> = productInitValue) => {
  const { t } = useTranslation('product');
  const { data: tags } = useFindTagByRequired();
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, getValues, watch, setValue, formState, resetField } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  useEffect(() => {
    if (tags?.data) {
      setValue('tags.product', getTagDefaultValue(tags?.data));
    }
  }, [setValue, tags?.data]);

  // const tagList = watch('tags.product');
  const places = watch('rules.deliveryRules.regions');
  const seoTitle = watch('name');

  const handleLimitByOrder = (isActive: boolean) => {
    setValue('rules.limitByOrder', isActive ? 0 : 1);
  };

  const addPlace = (newPlace: IRegion) => {
    const exist = places.some((item: IRegion) => item?.city === newPlace?.city && item?.state === newPlace?.state);
    if (!exist) setValue('rules.deliveryRules.regions', [...places, newPlace]);
  };

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (product: Partial<IProductCreate>) => {
      return ProductService.save(product);
    },
    {
      onSuccess: (data: IProduct, values) => {
        queryClient.invalidateQueries([PRODUCT_LIST_KEY]);
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
    resetField,
    handleLimitByOrder,
    addPlace,
    seoTitle,
    values: getValues(),
    onSubmit: handleSubmit(
      (values) => {
        const { tags, otherTags, selectedTag, ...rest } = values;

        mutate({
          ...rest,
          tags: {
            // @ts-ignore
            product: parseTagList(tags?.product || [], otherTags || []),
            supplier: [],
          },
        });
      },

      // get scroll to first error
      (errors) => {
        scrollToFirstError(errors, 'product-form');
      },
    ),
  };
};
export default useProductCreateForm;
