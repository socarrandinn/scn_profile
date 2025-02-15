import { ConditionContainer, LoadingButton } from '@dfl/mui-react-common';
import { Button, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useProductDiscountDetails } from '../../contexts/ProductDiscountDetails';
import useProductDiscountCreateForm from '../../hooks/useProductDiscountCreateForm';
import { ProductDiscountHeaderForm, ProductDiscountHeaderFormSkeleton } from '../ProductDiscountHeaderForm';

const ProductDiscountDetailsHeaderContent = ({ onClose }: { onClose: VoidFunction }) => {
  const { t } = useTranslation('productDiscount');
  const { discount: offer, isLoading: isLoadingOffer, error: offerError } = useProductDiscountDetails();
  const { control, isLoading, error, onSubmit, discount, discountType } = useProductDiscountCreateForm(onClose, offer);

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
            type={'submit'}
            loading={isLoading || isLoadingOffer}
            disabled={isLoading || isLoadingOffer || !!offerError}
            form='form-update-product-offers'
          >
            {t('common:save')}
          </LoadingButton>
        </Stack>
      </Stack>
    </ConditionContainer>
  );
};

export default memo(ProductDiscountDetailsHeaderContent);
