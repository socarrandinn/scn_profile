import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import RelatedProductsForm from 'modules/inventory/product/containers/ProductFormSections/RelatedProductsForm';
import useUpdateRelatedProducts from '../../hooks/useUpdateRelatedProducts';
import { RELATED_PRODUCTS_ACTION } from '../../constants/related-products.enum';

type RelatedProductsAddModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: Partial<IProductCreate>;
  onClose: () => void;
};

const RelatedProductsAddModal = ({
  title = 'section.relatedProducts.addRelatedProduct',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: RelatedProductsAddModalProps) => {
  const { t } = useTranslation('product');
  const { control, onSubmit, isLoading, reset, error } = useUpdateRelatedProducts(
    initValue,
    RELATED_PRODUCTS_ACTION.ADD,
    onClose,
  );

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
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
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

export default memo(RelatedProductsAddModal);
