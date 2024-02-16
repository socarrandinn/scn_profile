import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import { ProductGeneralEstimatedTimeForm } from 'modules/inventory/product/components/ProductGeneralEstimatedTimeForm';
import useProductEstimatedTimeCreateForm from 'modules/inventory/product/hooks/useProductEstimatedTimeCreateForm';
import ProductGeneralEstimatedTimeFormSkeleton from 'modules/inventory/product/components/ProductGeneralEstimatedTimeForm/ProductGeneralEstimatedTimeFormSkeleton';

type ProductDetailEstimatedTimeContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IProduct>;
  onClose: () => void;
};

const ProductDetailEstimatedTimeContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: ProductDetailEstimatedTimeContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useProductEstimatedTimeCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<ProductGeneralEstimatedTimeFormSkeleton />}>
          <ProductGeneralEstimatedTimeForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(ProductDetailEstimatedTimeContainer);
