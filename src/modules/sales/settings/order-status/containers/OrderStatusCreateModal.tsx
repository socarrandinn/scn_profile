import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useOrderStatusCreateForm from 'modules/sales/settings/order-status/hooks/useOrderStatusCreateForm';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import { OrderStatusForm, OrderStatusFormSkeleton } from 'modules/sales/settings/order-status/components/OrderStatusForm';

type OrderStatusCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IOrderStatus;
  onClose: () => void;
};

const OrderStatusCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: OrderStatusCreateModalProps) => {
  const { t } = useTranslation('orderStatus');

  const { control, onSubmit, isLoading, reset, error, setValue, resetMutationState, submitButtonActionName } =
    useOrderStatusCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
    resetMutationState();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      // onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'orderStatus-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<OrderStatusFormSkeleton />}>
            <OrderStatusForm
              error={error}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
              setValue={setValue}
            />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={(isLoading && submitButtonActionName === 'save') || loadingInitData}
          disabled={!!dataError || isLoading}
          form='form'
          name='save'
        >
          {t('common:save')}
        </LoadingButton>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={(isLoading && submitButtonActionName === 'save and create') || loadingInitData}
          disabled={!!dataError || isLoading}
          form='form'
          name='save and create'
        >
          {t('common:saveAndCreate')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(OrderStatusCreateModal);
