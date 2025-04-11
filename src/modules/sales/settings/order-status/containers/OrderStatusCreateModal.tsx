import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useOrderStatusCreateForm from 'modules/sales/settings/order-status/hooks/useOrderStatusCreateForm';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import {
  OrderStatusForm,
  OrderStatusFormSkeleton,
} from 'modules/sales/settings/order-status/components/OrderStatusForm';

type OrderStatusCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IOrderStatus;
  onClose: () => void;
  edit?: boolean;
};

const OrderStatusCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
  edit,
}: OrderStatusCreateModalProps) => {
  const { t } = useTranslation('orderStatus');

  const { control, onSubmit, isLoading, reset, error, setValue, resetMutationState, submitButtonActionName } =
    useOrderStatusCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
    resetMutationState();
  }, [onClose, reset, resetMutationState]);

  return (
    <DialogForm
      open={open}
      // onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'orderStatus-creation-title'}
      fullWidth
      maxWidth={'sm'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<OrderStatusFormSkeleton />}>
            <OrderStatusForm
              error={error}
              isLoading={isLoading}
              control={control}
              edit={edit}
              onSubmit={onSubmit}
              setValue={setValue}
            />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions
        sx={{
          display: 'flex',
          width: '100%',
          gap: 1,
          justifyContent: 'end',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          '& .MuiButton-root': {
            width: { xs: '100%', md: 'auto' },
          },
        }}
      >
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
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
