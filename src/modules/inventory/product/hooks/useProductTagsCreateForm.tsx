import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { productTagsSchema } from 'modules/inventory/product/schemas/product.schema';
import { IProductCreate } from '../interfaces/IProductCreate';
import { ISummaryTags } from 'modules/inventory/settings/tags/interfaces';
import { useEffect } from 'react';
import { parseTagList } from 'modules/inventory/settings/tags/utils/parser-tags';

type IOther = Partial<IProductCreate> & {
  selectedTag?: ISummaryTags[];
};
const initValues: IOther = {
  _id: '',
  tags: {
    product: [],
  },
  otherTags: [],
  selectedTag: [],
};

const useProductTagsCreateForm = (onClose: () => void, defaultValues: IOther = initValues) => {
  const { t } = useTranslation('tags');

  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(productTagsSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (payload: IOther) => ProductService.updateTags(payload),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successTagsUpdate'));
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
      const { _id, tags, otherTags } = values;
      // @ts-ignore
      mutate({ _id, tags: { product: parseTagList(tags?.product || [], otherTags || []) } });
    }),
  };
};
// @ts-ignore
export default useProductTagsCreateForm;
