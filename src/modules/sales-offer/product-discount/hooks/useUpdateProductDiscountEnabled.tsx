import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { PRODUCT_DISCOUNTS_LIST_KEY } from '../constants';
import { ProductDiscountService } from '../services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useUpdateProductDiscountEnabled = (offerId: string) => {
  const { t } = useTranslation(['productDiscount', 'errors']);
  const queryClient = useQueryClient();

  return useMutation((status: boolean) => ProductDiscountService.updateStatus(offerId, status), {
    onSuccess: (data: any) => {
      toast.success(
        t('successChangedStatus', {
          status: t(`enabledTypes.${data?.data?.enabled ? 'ACTIVE' : 'INACTIVE'}`),
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
