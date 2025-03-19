import { memo, useMemo } from 'react';
import { Stack, styled, Typography, TypographyProps } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DistributionCenterIcon } from 'modules/inventory/common/components/Icons/DistributionCenterIcon';
import { SHIPPING_TYPE_COLOR, SHIPPING_TYPE_ENUM } from '../../constants/order.enum';

import { ShippingExpressIcon } from '../icons/ShippingExpressIcon';
import { ShippingStandardIcon } from '../icons/ShippingStandardIcon';
import { DeliveryHomeIcon } from '../icons/DeliveryHomeIcon';

type OrderShippingTypeCellProps = TypographyProps & {
  value: SHIPPING_TYPE_ENUM;
  noIcon?: boolean;
  borderRadius?: number;
};

const OrderShippingTypeCell = ({ value, noIcon = false, borderRadius = 12 }: OrderShippingTypeCellProps) => {
  const { t } = useTranslation('order');

  const icon = useMemo(() => {
    switch (value) {
      case SHIPPING_TYPE_ENUM.STORE_PICKUP:
        return <DistributionCenterIcon />;
      case SHIPPING_TYPE_ENUM.EXPRESS:
        return <ShippingExpressIcon />;
      case SHIPPING_TYPE_ENUM.STANDARD:
        return <ShippingStandardIcon />;
      case SHIPPING_TYPE_ENUM.HOME_DELIVERY:
        return <DeliveryHomeIcon />;

      case SHIPPING_TYPE_ENUM.ON_DEMAND:
        return <ShippingExpressIcon fontSize='inherit' />;

      default:
        return <ShippingStandardIcon />;
    }
  }, [value]);

  if (!value) return <></>;

  if (noIcon) return <Typography>{t(`shipping.shippingType.${value}`)}</Typography>;

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        gap: 1,
        maxHeight: 25,
        borderRadius,
        backgroundColor: 'background.default',
        padding: '0 8px 0 0',
        alignItems: 'center',
        fontWeight: 400,
      }}
    >
      <IconContent
        sx={{
          backgroundColor: SHIPPING_TYPE_COLOR[value] || 'primary.main',
        }}
      >
        {icon}
      </IconContent>
      <Typography fontSize={13} sx={{ my: 0.5 }} noWrap>
        {t(`shipping.shippingType.${value}`)}
      </Typography>
    </Stack>
  );
};

export default memo(OrderShippingTypeCell);

const IconContent = styled(Stack)(() => ({
  color: '#fff',
  borderRadius: 12,
  height: 22,
  width: 22,
  justifyContent: 'center',
  alignItems: 'center',
  svg: {
    height: 16,
    width: 16,
  },
}));
