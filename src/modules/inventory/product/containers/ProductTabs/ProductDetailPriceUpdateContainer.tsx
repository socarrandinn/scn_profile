import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { ProductPriceTabFormForm } from 'modules/inventory/product/components/ProductPriceForm';
import useProductPriceCreateForm from 'modules/inventory/product/hooks/useProductPriceCreateForm';
import ProductPriceTabFormSkeleton from 'modules/inventory/product/components/ProductPriceForm/ProductPriceTabFormSkeleton';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import { mapGetOneErrors } from 'constants/errors';

type productDetailPriceUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IProductCreate>;
};

const ProductDetailPriceUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
}: productDetailPriceUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const {
    control,
    onSubmit,
    isLoading,
    error,
    reset,
    logisticPriceType,
    shippingPriceType,
    commercialPriceType,
    otherCostPriceType,
    editFinalPrice,
  } = useProductPriceCreateForm(initValue);

  const handleClose = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<ProductPriceTabFormSkeleton />}>
          <ProductPriceTabFormForm
            logisticPriceType={logisticPriceType}
            shippingPriceType={shippingPriceType}
            commercialPriceType={commercialPriceType}
            otherCostPriceType={otherCostPriceType}
            editFinalPrice={editFinalPrice}
            error={error}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
          />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(ProductDetailPriceUpdateContainer);
