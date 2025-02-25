import { useToggle } from '@dfl/hook-utils';
import { PermissionCheck } from '@dfl/react-security';
import { Stack } from '@mui/material';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useProductDiscountDetails } from '../../contexts/ProductDiscountDetails';
import { useDeleteProductDiscountProduct } from '../../hooks/useDeleteProductDiscountProduct';
import { OFFER_STATUS } from 'modules/sales-offer/common/constants/offer.enum';
import { ConfirmButton } from 'components/ConfirmActions';
import ACTION_IMAGES from 'assets/images/actions';
import DeleteIcon from 'components/icons/DeleteIcon';

type UserStatusProps = {
  rowId: string;
  record: any;
};

const ProductOfferDetailRowActions = ({ rowId }: UserStatusProps) => {
  const { t } = useTranslation('productDiscount');
  const { id, discount } = useProductDiscountDetails();
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading, error } = useDeleteProductDiscountProduct(id, rowId, onClose);

  const { confirmation, disabled } = useMemo(() => {
    const isActive = discount?.status === OFFER_STATUS.ACTIVE;
    const isDisabled = discount?.status === OFFER_STATUS.DISABLED;

    return {
      confirmation: isActive ? 'deleteConfirmation.active' : 'deleteConfirmation.all',

      disabled: isActive || isDisabled,
    };
  }, [discount?.status]);

  return (
    <Stack direction='row' spacing={1} justifyContent={'center'}>
      <PermissionCheck permissions={'BULK_PRODUCT_DISCOUNT:DELETE'}>
        <ConfirmButton
          disabled={disabled}
          icon={<DeleteIcon fontSize='small' color='error' />}
          onConfirm={mutate}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          imageUrl={ACTION_IMAGES.deleteImage}
          confirmationMessage={t(confirmation)}
          isLoading={isLoading}
          error={error}
        />
      </PermissionCheck>
    </Stack>
  );
};

export default memo(ProductOfferDetailRowActions);
