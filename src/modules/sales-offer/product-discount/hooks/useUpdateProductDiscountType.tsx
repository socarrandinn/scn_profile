import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Trans, useTranslation } from 'react-i18next';
import { PRODUCT_DISCOUNTS_LIST_KEY } from '../constants';
import { ProductDiscountService } from '../services';

const useUpdateProductOfferDiscountType = (offerId: string) => {
  const { t } = useTranslation(['productOffer', 'errors']);
  const queryClient = useQueryClient();

  return useMutation((status: string) => ProductDiscountService.saveOrUpdate({ _id: offerId, discountType: status }), {
    onSuccess: (data: any) => {
      toast.success(
        <Trans
          i18nKey={'productDiscount:discountTypes.message.success'}
          values={{
            type: t(`productDiscount:discountTypes.${ data?.discountType }`),
          }}
        />,
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
