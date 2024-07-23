import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { UseFormSetValue } from 'react-hook-form';
import { UploadImportProduct } from '../services';
import { IProductAction } from '../interfaces/IProductImport';

export const useImportProductFile = (setValue: UseFormSetValue<IProductAction>) => {
  const { t } = useTranslation('productUpload');

  const { mutateAsync, error, isLoading, data } = useMutation(
    (file: FormData) => UploadImportProduct.importFile(file),
    {
      onSuccess: (data) => {
        setValue('job', data?.job);
        toast.success(t('success'));
      },
      onError: (_error) => {
        setValue('job', '');
        toast.error(t('error'));
      },
    },
  );

  return {
    onproductUpload: (file: FormData) => {
      mutateAsync(file);
    },
    error,
    data,
    isLoading,
  };
};
