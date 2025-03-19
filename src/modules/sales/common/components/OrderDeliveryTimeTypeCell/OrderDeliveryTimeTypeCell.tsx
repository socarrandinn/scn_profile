import { memo, useMemo } from 'react';
import { Stack, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DELIVERY_TIME_TYPE_COLOR, DELIVERY_TIME_TYPE_ENUM } from '../../constants/order.enum';
import { ShippingExpressIcon } from '../icons/ShippingExpressIcon';
import { ShippingStandardIcon } from '../icons/ShippingStandardIcon';
import { NumberFormatBaseProps } from 'react-number-format';

type OrderDeliveryTimeTypeCellProps = {
  value: DELIVERY_TIME_TYPE_ENUM;
  noIcon?: boolean;
  borderRadius?: NumberFormatBaseProps;
};

const OrderDeliveryTimeTypeCell = ({ value, noIcon = false, borderRadius = 12 }: OrderDeliveryTimeTypeCellProps) => {
  const { t } = useTranslation('order');
  const icon = useMemo(() => {
    switch (value) {
      case DELIVERY_TIME_TYPE_ENUM.REGULAR:
        return <ShippingStandardIcon />;
      case DELIVERY_TIME_TYPE_ENUM.SCHEDULED:
      case DELIVERY_TIME_TYPE_ENUM.EXPRESS:
        return <ShippingExpressIcon />;

      default:
        return <ShippingStandardIcon />;
    }
  }, [value]);

  if (!value) return <></>;
  if (noIcon) return <Typography>{t(`shipping.deliveryTimeType.${value}.title`)}</Typography>;
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
          backgroundColor: DELIVERY_TIME_TYPE_COLOR[value] || 'default.main',
        }}
      >
        {icon}
      </IconContent>
      <Typography fontSize={13} sx={{ my: 0.5 }} noWrap>
        {t(`shipping.deliveryTimeType.${value}.title`)}
      </Typography>
    </Stack>
  );
};

export default memo(OrderDeliveryTimeTypeCell);

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
