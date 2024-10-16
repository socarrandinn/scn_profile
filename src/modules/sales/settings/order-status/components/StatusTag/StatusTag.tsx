import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/constants';

interface IStatusTag {
  status: string;
}

const StatusTag = ({ status }: IStatusTag) => {
  const { t } = useTranslation('orderStatus');

  const label = ORDER_STATUS_TYPE_ENUM[status as keyof typeof ORDER_STATUS_TYPE_ENUM];
  const translatedLabel = t('fields.orderStatusType.' + label);

  return <Chip label={translatedLabel} variant='outlined' sx={{ margin: '0 auto' }} />;
};

export default StatusTag;
