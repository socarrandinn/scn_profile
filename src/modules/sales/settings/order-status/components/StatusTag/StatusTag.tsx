import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/constants';
import { IOrderStatus } from '../../interfaces';

interface IStatusTag {
  value: ORDER_STATUS_TYPE_ENUM;
  record: IOrderStatus;
}

const StatusTag = ({ value, record }: IStatusTag) => {
  const { t } = useTranslation('orderStatus');

  return (
    <Chip
      // sx={{ borderColor: record?.color }}
      label={t(`fields.orderStatusType.${ORDER_STATUS_TYPE_ENUM[value]}`)}
      variant='outlined'
    />
  );
};

export default StatusTag;
