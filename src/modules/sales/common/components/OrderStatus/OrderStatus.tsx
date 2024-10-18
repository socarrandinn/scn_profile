import { memo } from 'react';
import { Chip, styled } from '@mui/material';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';

type OrderStatusProps = {
  value: IOrderStatus;
  fullWidth?: boolean;
  pointer?: boolean;
};

const WrapperChip = ({ statusColor, fullWidth, pointer, ...props }: OrderStatusProps & { statusColor: string }) => {
  // @ts-ignore
  return <Chip {...props} />;
};

export const Status = styled(WrapperChip)<{ statusColor: string; fullWidth: boolean; pointer: boolean }>(
  ({ statusColor, fullWidth, pointer }) => ({
    background: statusColor,
    ...(fullWidth ? { width: '100%' } : {}),
    ...(pointer ? { cursor: 'pointer' } : {}),
  }),
);

const OrderStatus = ({ value, fullWidth, pointer = true }: OrderStatusProps) => {
  return (
    <Status
      value={value}
      label={value?.title}
      size={'small'}
      // @ts-ignore
      pointer={pointer}
      statusColor={value?.color as string}
      // @ts-ignore
      color={'primary'}
      // @ts-ignore
      fullWidth={fullWidth}
    />
  );
};

export default memo(OrderStatus);
