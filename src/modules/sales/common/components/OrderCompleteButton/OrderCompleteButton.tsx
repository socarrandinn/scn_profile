import { memo, useCallback, useMemo } from 'react';
import { IconButton, Tooltip, Typography } from '@mui/material';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { LoadingButton } from '@dfl/mui-react-common';
import { PermissionCheck } from '@dfl/react-security';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import { useFindEndedOrderStatus, useFindOneOrderFromCache } from '../../hooks/useOrderStatus';
import useUpdateOrderStatus from '../../hooks/useOrderUpdateStatus';
import { TERMINABLE_STATUS_LIST } from '../../constants/order-status.flow';
import { ConfirmAction } from 'components/ConfirmAction';

type OrderCompleteButtonProps = {
  code: string | undefined;
  orderId: string | undefined;
  status: IOrderStatus | undefined;
  isActionButton?: boolean;
};

const OrderCompleteButton = ({ orderId, status, code, isActionButton }: OrderCompleteButtonProps) => {
  const { t } = useTranslation('order');
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { endedStatus, isLoading } = useFindEndedOrderStatus();
  const { mutateAsync, isLoading: isUpdating } = useUpdateOrderStatus(orderId as string, code);

  const { status: orderStatus } = useFindOneOrderFromCache(status);
  const isDisabled = useMemo(
    () => !TERMINABLE_STATUS_LIST.includes(status?.type || orderStatus?.type),
    [orderStatus?.type, status?.type],
  );

  const onFinishAction = useCallback(() => mutateAsync(endedStatus?._id || ''), [endedStatus?._id, mutateAsync]);

  const iconActionCmp = useMemo(() => {
    return (
      <IconButton disabled={isDisabled || isLoading || isUpdating} onClick={onOpen}>
        <DoneAllIcon />
      </IconButton>
    );
  }, [isDisabled, isLoading, isUpdating, onOpen]);

  const buttonCmp = useMemo(() => {
    if (isActionButton) {
      return (
        <LoadingButton
          variant={'contained'}
          loading={isUpdating}
          disabled={isDisabled || isLoading || isUpdating}
          startIcon={<DoneAllIcon />}
          onClick={onOpen}
        >
          <Typography noWrap>{t('header.actions.complete')}</Typography>
        </LoadingButton>
      );
    } else if (isDisabled) {
      return iconActionCmp;
    } else {
      return <Tooltip title={t('header.actions.complete')}>{iconActionCmp}</Tooltip>;
    }
  }, [iconActionCmp, isActionButton, isDisabled, isLoading, isUpdating, onOpen, t]);

  return (
    <PermissionCheck permissions={'ORDER_COMPLETE'}>
      {buttonCmp}
      <ConfirmAction
        open={isOpen}
        confirmation={t('header.actions.completeConfirm')}
        title={t('header.actions.complete')}
        onClose={onClose}
        onConfirm={onFinishAction}
      />
    </PermissionCheck>
  );
};

export default memo(OrderCompleteButton);
