import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { UseFormSetValue } from 'react-hook-form';
import { UploadImportProduct } from '../services';
import { IProductAction } from '../interfaces/IProductImport';

export const useImportProductFile = (setValue: UseFormSetValue<IProductAction>) => {
  const { t } = useTranslation('productUpload');

  const { mutateAsync, error, isLoading, data, isError, isSuccess, reset } = useMutation(
    (file: FormData) => UploadImportProduct.importFile(file),
    {
      onSuccess: (data) => {
        setValue('job', data?.job);
        toast.success(t('success'));
      },
      onError: (error) => {
        if (error instanceof Error) {
          toast.error(t('error'));
        } else {
          toast.error(t('error'));
        }
        setValue('job', '');
      },
    },
  );

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
    reset,
  };
};
