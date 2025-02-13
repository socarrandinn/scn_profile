import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { UploadImportProduct } from '../services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productImportFileSchema } from '../schemas/prodcut.import.schema';

export const useImportProductFile = () => {
  const { t } = useTranslation('productUpload');
  const queryClient = useQueryClient();

  const { control, reset } = useForm({
    resolver: yupResolver(productImportFileSchema),
    defaultValues: {
      file: '',
    },
  });

  const {
    mutateAsync,
    error,
    isLoading,
    data,
    isError,
    isSuccess,
    reset: resetMutation,
  } = useMutation((file: FormData) => UploadImportProduct.importFile(file), {
    onSuccess: (data) => {
      toast.success(t('success'));
      queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
    },
    /*   onError: (error) => {
      if (error instanceof Error) {
        toast.error(t('error'));
      } else {
        toast.error(t('error'));
      }
    }, */
  });

  return {
    onProductUpload: async (file: FormData) => {
      try {
        await mutateAsync(file);
      } catch (err) {
        console.error('Error al cargar producto:', err);
      }
    },
    error,
    data,
    isLoading,
    isError,
    isSuccess,
    reset: () => {
      reset();
      resetMutation();
    },
    control,
  };
};
