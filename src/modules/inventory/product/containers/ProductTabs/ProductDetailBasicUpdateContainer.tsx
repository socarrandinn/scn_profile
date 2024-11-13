import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import StoreGeneralBasicFormSkeleton from 'modules/inventory/warehouse/components/StoreGeneralBasicForm/StoreGeneralBasicFormSkeleton';
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
  const { control, onSubmit, isLoading, error, reset, formState } = useProductBasicCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<StoreGeneralBasicFormSkeleton />}>
          <ProductGeneralBasicForm
            showCategory
            error={error}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
            formState={formState}
          />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!formState?.isDirty || !!dataError}
          form='form'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(ProductDetailBasicUpdateContainer);
