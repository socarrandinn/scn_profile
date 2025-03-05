import { memo, useCallback, useMemo } from 'react';
import { IconButton, Tooltip, Typography } from '@mui/material';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { LoadingButton } from '@dfl/mui-react-common';
import { PermissionCheck } from '@dfl/react-security';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import useUpdateOrderStatus from '../../hooks/useOrderUpdateStatus';
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
  const { mutateAsync, isLoading: isUpdating } = useUpdateOrderStatus(orderId as string, code);
  const onFinishAction = useCallback(() => mutateAsync(status?._id || ''), [status?._id, mutateAsync]);

  const iconActionCmp = useMemo(() => {
    return (
      <IconButton disabled={isUpdating} onClick={onOpen}>
        <DoneAllIcon />
      </IconButton>
    );
  }, [isUpdating, onOpen]);

  const buttonCmp = useMemo(() => {
    if (isActionButton) {
      return (
        <LoadingButton
          variant={'contained'}
          loading={isUpdating}
          disabled={isUpdating}
          startIcon={<DoneAllIcon />}
          onClick={onOpen}
        >
          <Typography noWrap>{t('header.actions.complete')}</Typography>
        </LoadingButton>
      );
    } else {
      return <Tooltip title={t('header.actions.complete')}>{iconActionCmp}</Tooltip>;
    }
  }, [iconActionCmp, isActionButton, isUpdating, onOpen, t]);

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
