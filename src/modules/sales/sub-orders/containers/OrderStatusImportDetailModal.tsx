import { DialogForm } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IOrderStatusSummary, ORDER_STATUS_SUMMARY_CASE } from '../interfaces';
import OrderStatusContainer from './OrderStatusContainer';

type OrderStatusImportDetailModalProps = {
  open: boolean;
  onClose: () => void;
  summaryCase: ORDER_STATUS_SUMMARY_CASE;
  summary: IOrderStatusSummary;
  successDataError?: any[];
};
const OrderStatusImportDetailModal = ({
  open,
  summaryCase,
  summary,
  onClose,
  successDataError,
}: OrderStatusImportDetailModalProps) => {
  const { t } = useTranslation('subOrder');
  const _disableAction = useMemo(() => Object.keys(ORDER_STATUS_SUMMARY_CASE).includes(summaryCase), [summaryCase]);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <DialogForm open={open} aria-labelledby={'stock-creation-title'} onClose={handleClose} maxWidth={'sm'}>
      <DialogContent>
        <OrderStatusContainer
          summary={summary}
          _case={summaryCase}
          onClose={onClose}
          successDataError={successDataError}
        />
      </DialogContent>
      <DialogActions sx={{ mt: 2 }}>
        <Button variant='grey' onClick={handleClose}>
          {t('common:close')}
        </Button>
        {!_disableAction && (
          <LoadingButton variant='contained' type={'submit'} loading={false} form='error-list-form'>
            {t('common:save')}
          </LoadingButton>
        )}
      </DialogActions>
    </DialogForm>
  );
};

export default memo(OrderStatusImportDetailModal);
