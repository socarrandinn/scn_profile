import { memo } from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

type OrderShippingTypeCellProps = TypographyProps & {
  value: string;
};

const OrderShippingTypeCell = ({ value, ...props }: OrderShippingTypeCellProps) => {
  const { t } = useTranslation('order');
  if (!value) return <></>;
  return <Typography {...props}>{t(`shipping.shippingType.${value}`)}</Typography>;
};

export default memo(OrderShippingTypeCell);
