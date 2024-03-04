import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import ProductGeneralOfferFormSkeleton from 'modules/inventory/product/components/ProductGeneralOfferForm/ProductGeneralOfferFormSkeleton';
import useProductPerUnitsCreateForm from 'modules/inventory/product/hooks/useProductPerUnitsCreateForm';
import { ProductGeneralPerUnitsForm } from 'modules/inventory/product/components/ProductGeneralPerUnitsForm';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';

type ProductDetailPerUnitsUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IProductCreate>;
  onClose: () => void;
  isDisabled?: boolean;
};

const ProductDetailPerUnitsUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
  isDisabled,
}: ProductDetailPerUnitsUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, resetField, selectedMeasureEdit } = useProductPerUnitsCreateForm(
    onClose,
    initValue,
  );

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<ProductGeneralOfferFormSkeleton />}>
          <ProductGeneralPerUnitsForm
            resetField={resetField}
            error={error}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
            isDisabled={isDisabled as boolean}
            selectedMeasureEdit = {selectedMeasureEdit as string}
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

export default memo(ProductDetailPerUnitsUpdateContainer);
