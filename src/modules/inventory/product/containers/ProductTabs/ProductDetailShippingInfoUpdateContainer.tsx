import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import useProductShippingInfoCreateForm from 'modules/inventory/product/hooks/useProductShippingInfoCreateForm';
import { ProductGeneralShippingInfoForm } from 'modules/inventory/product/components/ProductGeneralShippingInfoForm';
import ProductGeneralShippingInfoFormSkeleton from 'modules/inventory/product/components/ProductGeneralShippingInfoForm/ProductGeneralShippingInfoFormSkeleton';

import { IProductCreate } from '../../interfaces/IProductCreate';

type ProductDetailShippingInfoUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IProductCreate>
  onClose: () => void;
};

const ProductDetailShippingInfoUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: ProductDetailShippingInfoUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, addPlace, municipalityInEdit, provinceInEdit } =
    useProductShippingInfoCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<ProductGeneralShippingInfoFormSkeleton />}>
          <ProductGeneralShippingInfoForm
            error={error}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
            addPlace={addPlace}
            provinceInEdit={provinceInEdit}
            municipalityInEdit={municipalityInEdit}
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

export default memo(ProductDetailShippingInfoUpdateContainer);
