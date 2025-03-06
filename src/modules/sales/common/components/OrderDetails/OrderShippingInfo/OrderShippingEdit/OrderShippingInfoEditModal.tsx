import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { DialogForm, LoadingButton } from '@dfl/mui-react-common';
import { IShipping } from 'modules/sales/common/interfaces/IOrder';
import useOrderShippingForm from 'modules/sales/common/hooks/useOrderShippingForm';
import OrderShippingForm from './OrderShippingForm';

type OrderShippingInfoEditProps = {
  orderId: string | undefined;
  open: boolean;
  initValue?: IShipping;
  onClose: () => void;
};

const OrderShippingInfoEditModal = ({ orderId, open, onClose, initValue }: OrderShippingInfoEditProps) => {
  const { t } = useTranslation('order');
  const { control, onSubmit, onSubmitWithValid, isLoading, reset, error, setValue } = useOrderShippingForm(
    orderId,
    onClose,
    initValue,
  );

  const handleSaveAndValidate = useCallback(
    (e: any) => {
      e.preventDefault();
      onSubmitWithValid(e);
    },
    [onSubmitWithValid],
  );

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      title={`${t('common:edit')} ${t('shipping.title')}`}
      aria-labelledby={'order-shipping-edit-title'}
      maxWidth='md'
    >
      <DialogContent>
        <OrderShippingForm
          setValue={setValue}
          error={error}
          isLoading={isLoading}
          control={control}
          onSubmit={onSubmit}
        />
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='order-shipping-validation-form'>
          {t('common:save')}
        </LoadingButton>
        <LoadingButton variant='contained' onClick={handleSaveAndValidate} loading={isLoading} form='form'>
          {t('order:shipping.saveAndValidate')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(OrderShippingInfoEditModal);
