import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import StoreGeneralBasicFormSkeleton from 'modules/inventory/store/components/StoreGeneralBasicForm/StoreGeneralBasicFormSkeleton';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { ProductGeneralBasicForm } from 'modules/inventory/product/components/ProductGeneralBasicForm';
import useProductBasicCreateForm from 'modules/inventory/product/hooks/useProductBasicCreateForm';
import { mapGetOneErrors } from 'constants/errors';
import { IProductCreate } from '../../interfaces/IProductCreate';

type productDetailBasicUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IProductCreate>;
  onClose: () => void;
};

const ProductDetailBasicUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: productDetailBasicUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useProductBasicCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<StoreGeneralBasicFormSkeleton />}>
          <ProductGeneralBasicForm showCategory showKeyword error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(ProductDetailBasicUpdateContainer);
