import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useProductDiscountCreateForm from 'modules/sales-offer/product-discount/hooks/useProductDiscountCreateForm';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';
import {
  ProductDiscountForm,
  ProductDiscountFormSkeleton,
} from 'modules/sales-offer/product-discount/components/ProductDiscountForm';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';

type ProductDiscountCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IProductDiscount;
  onClose: () => void;
};
const ProductDiscountCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: ProductDiscountCreateModalProps) => {
  const { t } = useTranslation('productDiscount');
  const { control, onSubmit, isLoading, reset, error, discountType } = useProductDiscountCreateForm(onClose, initValue);
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
          <ConditionContainer active={!loadingInitData} alternative={<ProductDiscountFormSkeleton />}>
            <ProductDiscountForm
              error={error}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
              discountType={discountType}
            />
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

export default memo(ProductDiscountCreateModal);
