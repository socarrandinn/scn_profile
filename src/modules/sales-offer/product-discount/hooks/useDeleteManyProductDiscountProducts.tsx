import { useTableSelection } from '@dfl/mui-admin-layout';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { PRODUCT_DISCOUNTS_LIST_KEY } from '../constants';
import { useProductDiscountDetails } from '../contexts/ProductDiscountDetails';
import { ProductDiscountService } from '../services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';

export const useDeleteManyProductDiscountProducts = () => {
  const queryClient = useQueryClient();
  const { id } = useProductDiscountDetails();
  const { t } = useTranslation('productDiscount');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    () => {
      if (selected && selected?.length) {
        return ProductDiscountService.removeProduct(id, selected);
      }
      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: (data: any) => {
        toast.success(t('successDeletedManyDetails'));
        clearSelection();
        queryClient.invalidateQueries([PRODUCT_DISCOUNTS_LIST_KEY]);
        queryClient.invalidateQueries([data._id]);
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
};
