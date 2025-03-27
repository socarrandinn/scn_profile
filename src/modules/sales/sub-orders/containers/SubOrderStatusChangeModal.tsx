import { memo, useCallback, useMemo } from 'react';
import { Button, DialogActions, DialogContent, Grid, Skeleton } from '@mui/material';
import { ConditionContainer, DialogForm, Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useSubOrderStatusChangeBulk from '../hooks/status/useSubOrderStatusChangeBulk';
import { OrderStatusSelect } from 'modules/sales/settings/order-status/components/OrderStatusSelect';
import { TermFilter } from '@dofleini/query-builder';
import { SUB_ORDER_ERRORS } from '../constants/sub-order.errors';
import SubOrderStatusSummary from '../components/SubOrderStatusChange/SubOrderStatusSummary';
import { subOrderExcludeStatus } from '../constants/sub-order-utils';

type SubOrderStatusChangeModalProps = {
  open: boolean;
  filters?: any;
  onClose: () => void;
  isAll: boolean;
  total?: number | undefined;
};

const SubOrderStatusChangeModal = ({ filters, open, onClose, total }: SubOrderStatusChangeModalProps) => {
  const { t } = useTranslation('subOrder');
  const initValue = useMemo(() => ({ status: null, filters, total }), [filters, total]);
  const excludeStatus = useMemo(() => new TermFilter({ field: 'type', value: { $nin: subOrderExcludeStatus } }), []);

  const { control, onSubmit, isLoading, reset, error } = useSubOrderStatusChangeBulk(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={isLoading}
      title={t('changeStatus.title')}
      aria-labelledby={'order-bulk-status-change'}
    >
      <DialogContent>
        <SubOrderStatusSummary totalOrders={total ?? 0} />
        <ConditionContainer
          active={!isLoading}
          alternative={<Skeleton variant='rectangular' height={35} animation='wave' />}
        >
          <>
            <HandlerError error={error} errors={SUB_ORDER_ERRORS} />
            <Form onSubmit={onSubmit} control={control} isLoading={isLoading} id={'status-change-bulk-form'}>
              <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12}>
                  <OrderStatusSelect
                    name='status'
                    label={t('changeStatus.title')}
                    fetchOption={{ filters: excludeStatus }}
                  />
                </Grid>
              </Grid>
            </Form>
          </>
        </ConditionContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='status-change-bulk-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(SubOrderStatusChangeModal);
