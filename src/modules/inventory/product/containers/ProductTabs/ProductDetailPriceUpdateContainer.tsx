import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import StoreGeneralBasicFormSkeleton from 'modules/inventory/store/components/StoreGeneralBasicForm/StoreGeneralBasicFormSkeleton';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { ProductPriceTabFormForm } from 'modules/inventory/product/components/ProductPriceForm';
import useProductPriceCreateForm from 'modules/inventory/product/hooks/useProductPriceCreateForm';

type productDetailPriceUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IProduct>;
  onClose: () => void;
};

const ProductDetailPriceUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: productDetailPriceUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useProductPriceCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<StoreGeneralBasicFormSkeleton />}>
          <ProductPriceTabFormForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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
