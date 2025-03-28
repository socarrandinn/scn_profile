import { ConditionContainer, DialogForm, HandlerError } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { mapGetOneErrors } from 'constants/errors';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { IOrderStatusImport } from '../interfaces';
import useSubOrderStatusImportForm from '../hooks/status/useSubOrderStatusImportForm';
import {
  OrderStatusImportForm,
  OrderStatusImportFormSkeleton,
} from 'modules/sales/common/components/OrderStatusImportForm';
import HandleImportError from 'modules/inventory/product-stock/components/HandleImportError/HandleImportError';
import { SUB_ORDER_ERRORS } from '../constants/sub-order.errors';

type OrderImportStatusModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title: string;
  subtitle?: string;
  dataError?: any;
  initValue?: IOrderStatusImport;
  onClose: () => void;
};
const OrderImportStatusModal = ({
  title,
  subtitle,
  open,
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: OrderImportStatusModalProps) => {
  const { t } = useTranslation('subOrder');
  const { isOpen: showDetail, onToggle } = useToggle(false);
  const {
    control,
    onSubmit,
    isLoading,
    reset,
    error: summary,
    data: successData,
    isSuccess,
  } = useSubOrderStatusImportForm(initValue);

  const _error = useMemo(() => {
    if (summary?.message) {
      return {
        reference: 'SE001',
        message: summary?.message,
      };
    }
    return null;
  }, [summary?.message]);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      isLoading={loadingInitData}
      title={t(title)}
      subtitle={t(subtitle || '')}
      aria-labelledby={'stock-creation-title'}
      onClose={handleClose}
      maxWidth={'sm'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SUB_ORDER_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<OrderStatusImportFormSkeleton />}>
            <HandleImportError error={_error} onClick={onToggle} />
            <OrderStatusImportForm
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
              summary={{ ...summary, showDetail }}
              successData={successData}
              isSuccess={isSuccess}
              reset={reset}
            />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions sx={{ mt: 2 }}>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError || isSuccess}
          form='order-status-import-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(OrderImportStatusModal);
