import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { PRODUCT_DISCOUNTS_LIST_KEY } from '../constants';
import { ProductDiscountService } from '../services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useUpdateProductDiscountEnabled = (offerId: string) => {
  const { t } = useTranslation(['product', 'errors']);
  const queryClient = useQueryClient();

  return useMutation((status: boolean) => ProductDiscountService.saveOrUpdate({ _id: offerId, enabled: status }), {
    onSuccess: (data: any) => {
      toast.success(
        t('statusUpdate.success', {
          ns: 'productDiscount',
          status: data.enabled
            ? t('enabledTypes.ACTIVE', { ns: 'product' })
            : t('enabledTypes.INACTIVE', { ns: 'product' }),
        }),
      );
      queryClient.invalidateQueries([PRODUCT_DISCOUNTS_LIST_KEY]);
      queryClient.invalidateQueries([data._id]);
    },
    onError: () => {
      toast.error(t('generalErrorMessage', { ns: 'errors' }));
    },
  });
};

export default useUpdateProductDiscountEnabled;
