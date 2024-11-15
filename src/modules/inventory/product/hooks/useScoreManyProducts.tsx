import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { IDataSummary } from 'modules/common/interfaces/common-data-error';

export const useScoreManyProducts = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('product');
  const { selected, clearSelection } = useTableSelection();

  const mutate = useMutation(
    (score: number) => {
      if (selected && selected?.length) {
        return ProductService.changeScoreMany({
          ids: selected as string[],
          score,
        });
      }

      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: ({ data }: { data: IDataSummary }) => {
        if (data?.error === 0) {
          toast.success(t('successScoreMany'));
        }
        queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
      },
      onError: (error: any) => {
        if (error.reference === 'MD000') toast.error(t('common:errors.needSelection'));
        else {
          toast.error(t('common:errors.generalErrorMessage'));
        }
      },
    },
  );

  const reset = () => {
    mutate.reset();
    clearSelection();
  };

  return {
    ...mutate,
    reset,
  };
};
