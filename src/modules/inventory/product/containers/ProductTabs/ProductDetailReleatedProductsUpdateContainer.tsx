import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import ProductGeneralRelatedProductsFormSkeleton from 'modules/inventory/product/components/ProductGeneralRelatedProductsForm/ProductGeneralRelatedProductsFormSkeleton';
import ProductGeneralRelatedProductsForm from 'modules/inventory/product/components/ProductGeneralRelatedProductsForm/ProductGeneralRelatedProductsForm';
import useProductReleatedProducts from 'modules/inventory/product/hooks/useProductReleatedProducts';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';

type ProductDetailReleatedProductsUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IProductCreate>;
  onClose: () => void;
};

const ProductDetailReleatedProductsUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: ProductDetailReleatedProductsUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useProductReleatedProducts(initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<ProductGeneralRelatedProductsFormSkeleton />}>
          <ProductGeneralRelatedProductsForm
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

export default memo(ProductDetailReleatedProductsUpdateContainer);
