import { ConditionContainer, HandlerError, SkeletonForm } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import useProductSEOCreateForm from 'modules/inventory/product/hooks/useProductSEOCreateForm';
import { mapGetOneErrors } from 'constants/errors';
import { ProductSeoForm } from '../../components/ProductSEOForm';

type productDetailSEOUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IProductCreate>;
  onClose: () => void;
};

const ProductDetailSeoUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: productDetailSEOUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, seoTitle, seoDescription, slugDescription, formState } =
    useProductSEOCreateForm(initValue, onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={3} />}>
          <ProductSeoForm
            error={error}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
            seoTitle={seoTitle}
            seoDescription={seoDescription}
            slugDescription={slugDescription}
          />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
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

export default memo(ProductDetailSeoUpdateContainer);
