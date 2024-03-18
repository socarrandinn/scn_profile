import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import ProductGeneralShippingInfoFormSkeleton from 'modules/inventory/product/components/ProductGeneralShippingInfoForm/ProductGeneralShippingInfoFormSkeleton';
import { ProductGeneralRulesInfoForm } from 'modules/inventory/product/components/ProductGeneralRulesInfoForm';
import useProductRulesCreateForm from 'modules/inventory/product/hooks/useProductRulesCreateForm';

type ProductDetailRulesUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IProduct>;
  onClose: () => void;
};

const ProductDetailRulesUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: ProductDetailRulesUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const {
    control,
    onSubmit,
    isLoading,
    error,
    reset,
    handleLimitByOrder,
  } = useProductRulesCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<ProductGeneralShippingInfoFormSkeleton />}>
          <ProductGeneralRulesInfoForm
            error={error}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
            handleLimitByOrder={handleLimitByOrder}
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

export default memo(ProductDetailRulesUpdateContainer);
