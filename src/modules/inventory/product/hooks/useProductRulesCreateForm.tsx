import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { productInitValue } from 'modules/inventory/product/constants/product-init-value.constant';
import { productRulesSchema } from 'modules/inventory/product/schemas/product.schema';
import { IProductCreate, IRegion } from '../interfaces/IProductCreate';

interface IAddress {
  province: string;
  municipality: string;
}

const initValues: Partial<IProductCreate> & IAddress = {
  _id: '',
  rules: productInitValue.rules,

  // extras
  province: '',
  municipality: '',
};

const useProductShippingInfoCreateForm = (onClose: () => void, defaultValues: Partial<IProductCreate> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, setValue, watch } = useForm({
    resolver: yupResolver(productRulesSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const handleLimitByOrder = (isActive: boolean) => {
    setValue('rules.limitByOrder', isActive ? 0 : 1);
  };

  const placesInEdit = watch?.('rules.deliveryRules.regions') || [];

  const addPlace = (newPlace: IRegion) => {
    const exist = placesInEdit.some((item: IRegion) => item.city === newPlace.city && item.state === newPlace.state);
    if (!exist) {
      setValue('rules.deliveryRules.regions', [...placesInEdit, newPlace]);
    }
  };

  // @ts-ignore
  const provinceInEdit: string = watch('province');
  // @ts-ignore
  const municipalityInEdit: string = watch('municipality');

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (payload: Partial<IProductCreate>) => ProductService.updateRules(payload),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successBasicUpdate'));
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
    provinceInEdit,
    municipalityInEdit,
    addPlace,
    placesInEdit,
    reset,
    handleLimitByOrder,
    values: formState.errors,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
// @ts-ignore
export default useProductShippingInfoCreateForm;
