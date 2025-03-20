import { Box, Divider, Stack, Tooltip } from '@mui/material';
import { IShipping } from '../../interfaces/IOrder';

import { OrderShippingTypeCell } from '../OrderShippingTypeCell';
import { OrderDeliveryTimeTypeCell } from '../OrderDeliveryTimeTypeCell';
import { DateValue } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { ClockIcon } from 'modules/common/components/icons/ClockIcon';

type Props = {
  shipping: IShipping;
};
const OrderShippingInfo = ({ shipping }: Props) => {
  const { t } = useTranslation('order');
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 1,
        alignItems: 'center',
      }}
      divider={<Divider sx={{ display: { xs: 'none', md: 'block' } }} orientation='vertical' flexItem />}
    >
      {/* shipping method */}
      <Tooltip title={t('shipping.shippingType.title')}>
        <Box>
          <OrderShippingTypeCell value={shipping?.method} borderRadius={1} />
        </Box>
      </Tooltip>

      {/* shipping timeType */}
      <Tooltip title={t('shipping.deliveryTimeType.title')}>
        <Box>
          <OrderDeliveryTimeTypeCell value={shipping?.timeType} borderRadius={1} />
        </Box>
      </Tooltip>

      {/* shipping deliveryDueDate */}
      {shipping?.deliveryDueDate && (
        <>
          <Tooltip title={t('shipping.deliveryDueDate')}>
            <Stack
              sx={{
                flexDirection: 'row',
                height: 25,
                borderRadius: 1,
                backgroundColor: 'background.default',
                padding: '0 8px',
                alignItems: 'center',
                fontWeight: 400,
                gap: 1,
              }}
            >
              <ClockIcon fontSize='small' />
              <DateValue value={shipping?.deliveryDueDate} format='dd/MM/yyy | hh:mm' />
            </Stack>
          </Tooltip>
        </>
      )}
    </Stack>
  );
};

export default OrderShippingInfo;
