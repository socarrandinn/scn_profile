import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation, Trans } from 'react-i18next';
import { StocksService } from '../services';
import { UseFormSetValue } from 'react-hook-form';
import { IAddProductStock } from '../interfaces/IStock';
import { isEmpty } from 'lodash';

const components = {
  bold: <strong />,
};

export const useImportProductCodeByExcel = (onOpen: () => void, setValue: UseFormSetValue<IAddProductStock>) => {
  const { t } = useTranslation('product');

  const { mutateAsync, error, isLoading } = useMutation((file: FormData) => StocksService.uploadStock(file), {
    onSuccess: (data) => {
      if (data) {
        setValue('listErrorFile', data);
        onOpen?.();
        if (!isEmpty(data?.items)) {
          toast.success(
            <Trans
              i18nKey={t('product:successAddProductCode')}
              values={{
                cant: data?.items?.length,
                product: data?.items?.length === 1 ? 'producto' : 'productos',
              }}
              components={components}
            />,
          );
        } else {
          toast.error(t('noFoundProduct'));
        }
      }
    },
    onError: () => {
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
