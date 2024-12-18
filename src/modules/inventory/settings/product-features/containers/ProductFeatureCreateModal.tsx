import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useProductFeatureCreateForm from '../hooks/useProductFeatureCreateForm';
import { ProductFeatureForm, ProductFeatureFormSkeleton } from '../components/ProductFeatureForm';
import { IProductFeature } from '../interfaces/IProductFeature';

type ProductFeatureCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IProductFeature;
  onClose: () => void;
};
const ProductFeatureCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: ProductFeatureCreateModalProps) => {
  const { t } = useTranslation('productFeatures');
  const { control, onSubmit, isLoading, reset, error, formState } = useProductFeatureCreateForm(onClose, initValue);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'product-features-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<ProductFeatureFormSkeleton />}>
            <ProductFeatureForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError || !formState?.isValid}
          form='form-product-features'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(ProductFeatureCreateModal);
