import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { UseFormSetValue } from 'react-hook-form';
import { IAddProductStock } from '../interfaces/IStock';
import { UploadService } from 'modules/inventory/common/services';

export const useImportInvoiceFile = (setValue: UseFormSetValue<IAddProductStock>) => {
  const { t } = useTranslation('product');

  const { mutateAsync, error, isLoading } = useMutation((file: FormData) => UploadService.importFile(file), {
    onSuccess: (url: any) => {
      if (url) {
        setValue('file', url);
      }
    },
    onError: () => {
      setValue('file', '');
      toast.error(t('common:errors.generalErrorMessage'));
    },
  });

  return {
    onUploadStock: (file: FormData) => {
      mutateAsync(file);
    },
    error,
    isLoading,
  };
};
