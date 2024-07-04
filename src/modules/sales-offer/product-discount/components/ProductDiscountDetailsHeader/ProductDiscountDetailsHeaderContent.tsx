import { ConditionContainer, LoadingButton } from '@dfl/mui-react-common';
import { Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useProductDiscountDetails } from '../../contexts/ProductDiscountDetails';
import useProductDiscountCreateForm from '../../hooks/useProductDiscountCreateForm';
import { ProductDiscountHeaderForm, ProductDiscountHeaderFormSkeleton } from '../ProductDiscountHeaderForm';

const ProductDiscountDetailsHeaderContent = () => {
  const { t } = useTranslation('productDiscount');
  const { discount: offer, isLoading: isLoadingOffer } = useProductDiscountDetails();
  const { control, isLoading, error, onSubmit, discount, discountType } = useProductDiscountCreateForm(
    () => 'void',
    offer,
  );

  return (
    <ConditionContainer active={!isLoadingOffer} alternative={<ProductDiscountHeaderFormSkeleton />}>
      <Stack gap={2} width={'100%'}>
        <Typography variant='h1'>{t('details')}</Typography>
        <ProductDiscountHeaderForm
          error={error}
          control={control}
          isLoading={isLoading}
          onSubmit={onSubmit}
          offerDiscount={discount}
          discountType={discountType}
        />

        <LoadingButton
          sx={{ marginLeft: 'auto' }}
          variant='contained'
          type={'submit'}
          loading={isLoading || isLoadingOffer}
          disabled={isLoading || isLoadingOffer}
          form='form-update-product-offers'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </ConditionContainer>
  );
};

export default memo(ProductDiscountDetailsHeaderContent);
