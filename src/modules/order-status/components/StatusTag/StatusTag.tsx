import { Chip } from '@mui/material';
import { ORDER_STATUS_TYPES } from 'modules/order-status/constants/order-status-type';
import { useTranslation } from 'react-i18next';

interface IStatusTag {
  status: string;
}

const StatusTag = ({ status }: IStatusTag) => {
  const { t } = useTranslation('orderStatus');

  const label = ORDER_STATUS_TYPES[status as keyof typeof ORDER_STATUS_TYPES];
  const translatedLabel = t('fields.orderStatusType.' + label);

  return <Chip label={translatedLabel} variant='outlined' sx={{ margin: '0 auto' }} />;
};

export default StatusTag;
