import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import useProductReleatedProducts from 'modules/inventory/product/hooks/useProductReleatedProducts';
import RelatedProductsForm from 'modules/inventory/product/containers/ProductFormSections/RelatedProductsForm';

type RelatedProductstAddModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: Partial<IProductCreate>;
  onClose: () => void;
};
const RelatedProductstAddModal = ({
  title = 'section.relatedProducts.addReleatedProduct',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: RelatedProductstAddModalProps) => {
  const { t } = useTranslation('product');
  const { control, onSubmit, isLoading, reset, error } = useProductReleatedProducts(onClose, initValue);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm open={open} isLoading={loadingInitData} title={t(title)} aria-labelledby={'role-creation-title'}>
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={3} />}>
            <RelatedProductsForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
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
      </DialogActions>
    </DialogForm>
  );
};

export default memo(RelatedProductstAddModal);
