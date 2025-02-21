import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { Stack } from '@mui/material';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useProductDiscountDetails } from '../../contexts/ProductDiscountDetails';
import { useDeleteProductDiscountProduct } from '../../hooks/useDeleteProductDiscountProduct';
import { OFFER_STATUS } from 'modules/sales-offer/common/constants/offer.enum';

type UserStatusProps = {
  rowId: string;
  record: any;
};

const ProductOfferDetailRowActions = ({ rowId }: UserStatusProps) => {
  const { t } = useTranslation('productDiscount');
  const { id, discount } = useProductDiscountDetails();
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading, error } = useDeleteProductDiscountProduct(id, rowId, onClose);

  const confirmation = useMemo(
    () => (discount?.status === OFFER_STATUS.ACTIVE ? 'deleteConfirmation.active' : 'deleteConfirmation.all'),
    [discount?.status],
  );

  return (
    <Stack direction='row' spacing={1} justifyContent={'center'}>
      <PermissionCheck permissions={'BULK_PRODUCT_DISCOUNT:DELETE'}>
        <DeleteRowAction
          // disabled={discount?.status === OFFER_STATUS.ACTIVE}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
          confirmation={t(confirmation)}
        />
      </PermissionCheck>
    </Stack>
  );
};

export default memo(ProductOfferDetailRowActions);
