import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import usePaidOrderCreateForm from 'modules/sales/paid-order/hooks/usePaidOrderCreateForm';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';;
import { PaidOrderForm, PaidOrderFormSkeleton } from 'modules/sales/paid-order/components/PaidOrderForm';
import { PAID_ORDER_ERRORS } from 'modules/sales/paid-order/constants';
import { mapGetOneErrors } from 'constants/errors';

type PaidOrderCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IOrder;
  onClose: () => void;
};
const PaidOrderCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: PaidOrderCreateModalProps) => {
  const { t } = useTranslation('paidOrder');
  const { control, onSubmit, isLoading, reset, error } = usePaidOrderCreateForm(onClose, initValue);
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
      aria-labelledby={'paidOrder-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<PaidOrderFormSkeleton />}>
            <PaidOrderForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(PaidOrderCreateModal);
