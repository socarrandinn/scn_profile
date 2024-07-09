import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { ISupplier } from '../interfaces';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import SupplierTagsFormSkeleton from '../components/SupplierTagsForm/SupplierTagsFormSkeleton';
import useSupplierTagsForm from '../hooks/useSupplierTagsForm';
import ProductTagsEditForm from 'modules/inventory/product/components/ProductTagsForm/ProductTagsEditForm';

type ProductDetailTagsUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<ISupplier>;
  onClose: () => void;
};

const ProductDetailTagsUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: ProductDetailTagsUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useSupplierTagsForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<SupplierTagsFormSkeleton />}>
           <ProductTagsEditForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='tags-form'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(ProductDetailTagsUpdateContainer);
