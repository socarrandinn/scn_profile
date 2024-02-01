import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import useProductSEOCreateForm from 'modules/inventory/product/hooks/useProductSEOCreateForm';
import { ProductSEOInformationForm } from 'modules/inventory/product/components/ProductSEOForm/';
import ProductSEOInformationFormSkeleton from 'modules/inventory/product/components/ProductSEOForm/ProductSEOInformationFormSkeleton';
import { mapGetOneErrors } from 'constants/errors';

type productDetailSEOUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IProductCreate>;
  onClose: () => void;
};

const ProductDetailSEOUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: productDetailSEOUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useProductSEOCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<ProductSEOInformationFormSkeleton />}>
          <ProductSEOInformationForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(ProductDetailSEOUpdateContainer);
