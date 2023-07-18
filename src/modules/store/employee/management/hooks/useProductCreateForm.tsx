import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { CreateProductSchema } from 'modules/store/employee/management/schemas';
import { PRODUCT_LIST_KEY } from 'modules/store/employee/management/constants/queries';
import { IProduct, IProductCreate } from 'modules/store/employee/common/interfaces/IProduct';
import { productInitValue } from '../constants/product-init-value.constant';
import ProductService from '../../common/services/product.service';

const initValues: IProductCreate = {
  name: '',
  code: '',
  brand: '',
  description: '',
  estimateTime: {
    minTime: 0,
    maxTime: 0,
  },
  priceMedatada: {
    price: 0,
    extra: 0,
    platform: 0,
    providers: 0,
    commercial: 0
  },
  offer: {
    enabled: false,
    discountType: '',
    startDate:'',
    expiration: '',
    discount: 0,
  },
  shipping: {
    free: false,
    weight: 0,
    width: 0,
    length: 0,
    height: 0
  }
};

const useProductCreateForm = (onClose: () => void, defaultValues: IProductCreate = initValues) => {
  const { t } = useTranslation('product');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, getValues, watch, setValue, formState } = useForm({
    resolver: yupResolver(CreateProductSchema),
    defaultValues
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (product: IProductCreate) =>  ProductService.save(product),
    {
      onSuccess: (data: IProduct, values) => {
        queryClient.invalidateQueries([PRODUCT_LIST_KEY]);
        toast.success(t('successCreated'));
        onClose?.();
        reset();
      },
      onError: (data: any) => {
        console.log("Error", error)
      }
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
