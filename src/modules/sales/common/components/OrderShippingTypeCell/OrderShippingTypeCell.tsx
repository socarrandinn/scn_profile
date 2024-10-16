import { memo } from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

type OrderShippingTypeCellProps = {
  value: string;
};

const OrderShippingTypeCell = ({ value }: OrderShippingTypeCellProps) => {
  const { t } = useTranslation('order');
  if (!value) return <></>;
  return <Typography>{t(`shipping.shippingType.${value}`)}</Typography>;
};

export default memo(OrderShippingTypeCell);
