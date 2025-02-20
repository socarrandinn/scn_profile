import { ConditionContainer, LoadingButton } from '@dfl/mui-react-common';
import { Button, Stack, Typography } from '@mui/material';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useProductDiscountDetails } from '../../contexts/ProductDiscountDetails';
import useProductDiscountCreateForm from '../../hooks/useProductDiscountCreateForm';
import { ProductDiscountHeaderForm, ProductDiscountHeaderFormSkeleton } from '../ProductDiscountHeaderForm';
import { ConfirmDialog } from 'components/CollectionActions';
import { useToggle } from '@dfl/hook-utils';
import { DISCOUNT_STATUS } from '../../constants';
import ACTION_IMAGES from 'assets/images/actions';
import { TransTypography } from 'components/TransTypography';

const ProductDiscountDetailsHeaderContent = ({ onClose }: { onClose: VoidFunction }) => {
  const { t } = useTranslation('productDiscount');
  const editAction = useToggle(false);
  const { discount: offer, isLoading: isLoadingOffer, error: offerError } = useProductDiscountDetails();
  const { control, isLoading, error, onSubmit, discount, discountType } = useProductDiscountCreateForm(onClose, offer);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      if (offer?.status === DISCOUNT_STATUS.ACTIVE) {
        editAction.onOpen();
        return;
      }

      onSubmit(e);
    },
    [editAction, offer?.status, onSubmit],
  );

  const onConfirm = useCallback(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <ConditionContainer active={!isLoadingOffer} alternative={<ProductDiscountHeaderFormSkeleton />}>
      <Stack gap={2} width={'100%'}>
        <Typography variant='h1'>{t('details')}</Typography>
        <ProductDiscountHeaderForm
          error={offerError || error}
          control={control}
          isLoading={isLoading}
          onSubmit={onSubmit}
          offerDiscount={discount}
          discountType={discountType}
        />

        <Stack direction={'row'} justifyContent={'flex-end'} gap={1}>
          <Button variant='grey' onClick={onClose}>
            {t('common:close')}
          </Button>

          <LoadingButton
            variant='contained'
            onClick={handleSubmit}
            loading={isLoading || isLoadingOffer}
            disabled={isLoading || isLoadingOffer || !!offerError}
            form='form-update-product-offers'
          >
            {t('common:save')}
          </LoadingButton>
        </Stack>
      </Stack>
      <ConfirmDialog
        open={editAction.isOpen}
        title={t('productDiscount:confirm.title')}
        confirmationMessage={<TransTypography message='productDiscount:confirm.subtitle' />}
        onClose={editAction.onClose}
        isLoading={isLoading}
        onConfirm={onConfirm}
        confirmButtonText={t('common:confirmation.confirm')}
        imageUrl={ACTION_IMAGES.warningImage}
      />
    </ConditionContainer>
  );
};

export default memo(ProductDiscountDetailsHeaderContent);
