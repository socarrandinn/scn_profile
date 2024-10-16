import { memo } from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

type OrderDeliveryTimeTypeCellProps = {
  value: string;
};

const OrderDeliveryTimeTypeCell = ({ value }: OrderDeliveryTimeTypeCellProps) => {
  const { t } = useTranslation('order');
  if (!value) return <></>;
  return <Typography>{t(`shipping.deliveryTimeType.${value}`)}</Typography>;
};

export default memo(OrderDeliveryTimeTypeCell);
