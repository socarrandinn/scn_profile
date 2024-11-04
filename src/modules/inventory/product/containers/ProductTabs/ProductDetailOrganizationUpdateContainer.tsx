import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { ProductGeneralOrganizationForm } from 'modules/inventory/product/components/ProductGeneralOrganizationForm';
import useProductProviderCreateForm from 'modules/inventory/product/hooks/useProductProviderCreateForm';
import ProductGeneralOrganizationFormSkeleton from 'modules/inventory/product/components/ProductGeneralOrganizationForm/ProductGeneralOrganizationFormSkeleton';
import { mapGetOneErrors } from 'constants/errors';

type productDetailOrganizationUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IProductCreate>;
  onClose: () => void;
};

const ProductDetailOrganizationUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: productDetailOrganizationUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, formState } = useProductProviderCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<ProductGeneralOrganizationFormSkeleton />}>
          <ProductGeneralOrganizationForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!formState?.isDirty || !!dataError}
          form='providers-form'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(ProductDetailOrganizationUpdateContainer);
