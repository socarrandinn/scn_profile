import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { PRODUCT_DISCOUNTS_LIST_KEY } from '../constants';
import { ProductDiscountService } from '../services';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';

const useUpdateProductOfferDiscountType = (offerId: string) => {
  const { t } = useTranslation(['productDiscount', 'errors']);
  const queryClient = useQueryClient();

  return useMutation((status: string) => ProductDiscountService.saveOrUpdate({ _id: offerId, discountType: status }), {
    onSuccess: (data: IProductDiscount) => {
      toast.success(
        t('successChangedDiscountType', {
          type: t(`discountTypes.${data?.discountConfig?.type}`),
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

export default useUpdateProductOfferDiscountType;
