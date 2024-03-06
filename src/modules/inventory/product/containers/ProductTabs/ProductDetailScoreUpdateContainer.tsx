import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import useProductScoreCreateForm from 'modules/inventory/product/hooks/useProductScoreCreateForm';
import ProductScoreInformationFormSkeleton from 'modules/inventory/product/components/ProductScoreForm/ProductScoreInformationFormSkeleton';
import ProductScoreInformationForm from 'modules/inventory/product/components/ProductScoreForm/ProductScoreInformationForm';
import { mapGetOneErrors } from 'constants/errors';

type productDetailScoreUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IProduct>;
  onClose: () => void;
};

const ProductDetailScoreUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: productDetailScoreUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useProductScoreCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box marginTop={7}>
      {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<ProductScoreInformationFormSkeleton />}>
          <ProductScoreInformationForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(ProductDetailScoreUpdateContainer);
