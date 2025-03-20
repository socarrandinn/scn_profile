import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import {
  ProductDiscountBulkAddForm,
  ProductDiscountBulkAddFormSkeleton,
} from 'modules/sales-offer/product-discount/components/ProductDiscountBulkAddForm';
import { ProductDiscountSummary } from 'modules/sales-offer/product-discount/components/ProductDiscountSummary';
import useProductDiscountBulkAddForm from 'modules/sales-offer/product-discount/hooks/useProductDiscountBulkAddForm';
import { IProductDiscountAdd } from 'modules/sales-offer/product-discount/interfaces';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

type ProductOfferBulkAddModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IProductDiscountAdd;
  onClose: () => void;
  filters: any;
  total: number;
};
const ProductOfferBulkAddModal = ({
  title = 'addProducts',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
  filters,
  total,
}: ProductOfferBulkAddModalProps) => {
  const { t } = useTranslation('productDiscount');
  const { control, onSubmit, isLoading, reset, error } = useProductDiscountBulkAddForm(onClose, initValue, filters);

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
      aria-labelledby={'productDiscount-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<ProductDiscountBulkAddFormSkeleton />}>
            <ProductDiscountSummary total={total} />
            <ProductDiscountBulkAddForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(ProductOfferBulkAddModal);
