import { memo, useMemo } from 'react';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { Box } from '@mui/material';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import useSubOrderStatusUpdate from 'modules/sales/sub-orders/hooks/status/useSubOrderStatusUpdate';
import { isSubOrderStatusReadOnly } from 'modules/sales/sub-orders/constants/sub-order-utils';
import { useTranslateValue } from 'hooks/useTranslateValue';
import { IOrder } from '../../interfaces/IOrder';

type OrderStatusPickerProps = {
  value: IOrderStatus;
  record?: IOrder;
  button?: boolean;
  rowId: string;
  useHook?: any;
  readOnly?: boolean;
};

const OrderStatusPicker = ({
  value,
  button = false,
  rowId,
  useHook = useSubOrderStatusUpdate,
  readOnly,
}: OrderStatusPickerProps) => {
  const { hasPermission } = useSecurity();
  const { updateStatus: updateVisible, isLoading } = useHook(rowId);

  const _value = useCheckLocale(value as IStatus);

  const isReadOnly = useMemo(
    () => readOnly || !hasPermission(ORDER_PERMISSIONS.ORDER_WRITE) || isSubOrderStatusReadOnly(value),
    [hasPermission, readOnly, value],
  );

  return (
    <Box
      sx={{
        '.MuiButton-root': {
          borderRadius: button ? '5px !important' : undefined,
        },
        button: {
          minWidth: 90,
          minHeight: button ? 36.5 : 'auto',
          alignItems: 'center',
          justifyContent: 'space-around',
          'MuiButton-endIcon': {
            marginLeft: '2px !important',
          },
        },
      }}
      className={isReadOnly ? 'pointer-events-none' : ''}
    >
      <StatusPicker
        readOnly={isReadOnly}
        options={(value?.allowTo as IStatus[]) || []}
        name='status'
        size={'small'}
        isLoading={isLoading}
        value={_value}
        onChange={(status: IStatus) => updateVisible(status?._id)}
      />
    </Box>
  );
};

export default memo(OrderStatusPicker);

const useCheckLocale = (value: IStatus): IStatus => {
  const { locale } = useTranslateValue();
  if (typeof value?.title !== 'string') {
    value = {
      ...value,
      title: value?.title?.[locale],
    };
  }
  return value;
};
