import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { ProductDiscountBulkForm, ProductDiscountBulkFormSkeleton } from 'modules/sales-offer/product-discount/components/ProductDiscountBulkForm';
import { ProductDiscountSummary } from 'modules/sales-offer/product-discount/components/ProductDiscountSummary';
import useProductDiscountBulkCreateForm from 'modules/sales-offer/product-discount/hooks/useProductDiscountBulkCreateForm';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

type ProductOfferBulkCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IProductDiscount;
  onClose: () => void;
  filters: any;
  total: number;
};
const ProductOfferBulkCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
  filters,
  total,
}: ProductOfferBulkCreateModalProps) => {
  const { t } = useTranslation('productDiscount');
  const { control, onSubmit, isLoading, reset, error, offerDiscount, discountType } = useProductDiscountBulkCreateForm(
    onClose,
    initValue,
    filters,
  );
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
          <ConditionContainer active={!loadingInitData} alternative={<ProductDiscountBulkFormSkeleton />}>
            <ProductDiscountSummary total={total} />
            <ProductDiscountBulkForm
              error={error}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
              offerDiscount={offerDiscount}
              discountType={discountType}
            />
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

export default memo(ProductOfferBulkCreateModal);
