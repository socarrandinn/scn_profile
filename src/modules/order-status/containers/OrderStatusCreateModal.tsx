import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useOrderStatusCreateForm from 'modules/order-status/hooks/useOrderStatusCreateForm';
import { IOrderStatus } from 'modules/order-status/interfaces';
import { OrderStatusForm, OrderStatusFormSkeleton } from 'modules/order-status/components/OrderStatusForm';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';

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
  const { control, onSubmit, isLoading, reset, error, setValue } = useOrderStatusCreateForm(onClose, initValue);
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
      aria-labelledby={'orderStatus-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

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
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form'
        >
          {t('common:save')}
        </LoadingButton>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form'
        >
          {t('common:saveAndCreate')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(OrderStatusCreateModal);
