import { memo, useMemo } from 'react';
import { FlexBox, NumberValue } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import { Divider, Skeleton, Stack, styled, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { useOrderGetSettings } from 'modules/sales/common/hooks/useOrderGetSettings';
import { OrderStatusCell } from '../../OrderStatusCell';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import OrderExportMenu from 'modules/sales/paid-order/components/PaidOrderHeaderActions/actions/OrderExportMenu';
import { usePaidOrderContext } from 'modules/sales/paid-order/contexts/PaidOrderContext';
import ProductTable from './ProductTable';

import { SUB_ORDER_ROUTE } from 'modules/sales/sub-orders/constants/sub-order.route';
import { useFindOneOrderFromCache } from 'modules/sales/common/hooks/useOrderStatus';

type ProductTableSubOrderProps = {
  warehouse: string;
  order: IOrder;
};

export const SubOrderProducts = styled('div')(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingBottom: 16,
    marginBottom: 16,
  },
}));

const ProductTableSubOrder = ({ warehouse, order }: ProductTableSubOrderProps) => {
  const { t } = useTranslation('order');
  const { shippingText } = useOrderGetSettings(order?.shipping?.deliveryTimeType, warehouse);

  const { subOrder, productItems, weight } = useMemo(() => {
    const subOrder = order?.subOrders?.find((order) => order.warehouse === warehouse);
    const productItems = order?.items?.filter((product) => product.warehouse === warehouse);
    const offerItems = order?.offers;
    const weight = order?.invoice?.details?.delivery?.taxes?.weight;

    return {
      subOrder,
      productItems,
      offerItems,
      weight,
    };
  }, [order?.subOrders, order?.items, order?.offers, order?.invoice?.details?.delivery?.taxes?.weight, warehouse]);

  const { isLoading, status } = useFindOneOrderFromCache(subOrder?.status as unknown as string);

  return (
    <SubOrderProducts>
      <Stack gap={2}>
        <FlexBox flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} order={{ xs: 2, sm: 1 }}>
          <Stack>
            <Stack gap={1} flexDirection={'row'}>
              <Typography lineHeight={1} fontWeight={600}>
                {t('subOrders')}
              </Typography>
              {subOrder && (
                <ReactLink to={`${SUB_ORDER_ROUTE.DETAIL(subOrder?._id as string)}`}>{subOrder?.code}</ReactLink>
              )}
            </Stack>
            <Typography mb={1}>
              <strong>{shippingText} </strong>
            </Typography>
            <FlexBox alignItems={'center'} gap={1}>
              <Typography>
                <strong>{t('weight')} </strong>
              </Typography>
              <Typography>{weight ? <NumberValue value={weight} suffix={' Kg'} /> : 0}</Typography>
            </FlexBox>
          </Stack>
          {/* <OrderProviderItem logistic={store} /> */} {/* // todo  */}
        </FlexBox>
        <FlexBox
          order={{ xs: 1, sm: 2 }}
          mb={2}
          flexDirection={{ sm: 'column', md: 'row' }}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          {subOrder ? (
            <div>
              {isLoading ? (
                <Skeleton width={60} animation={'wave'} />
              ) : (
                <OrderStatusCell value={status as IOrderStatus} rowId={subOrder._id as string} record={subOrder} />
              )}
            </div>
          ) : (
            <Typography mb={2} color={'text.secondary'}>
              {t('waitingForValidate')}
            </Typography>
          )}
          {/*  //todo - definir provider export */}
          {subOrder?._id && <OrderExportMenu hazExportTicket useHookContext={usePaidOrderContext} />}
        </FlexBox>
      </Stack>
      <Stack gap={{ xs: 1, md: 3 }} divider={<Divider orientation='horizontal' />}>
        {!isEmpty(productItems) && <ProductTable items={productItems} invoice={order?.invoice} />}
        {/*  {!isEmpty(offerItems) && <OrderIncludeProducts offerProducts={offerItems} />}
        {!isEmpty(itemOffers) && <OrderIncludeProductOffers itemOffers={itemOffers} />} */}
      </Stack>
    </SubOrderProducts>
  );
};
export default memo(ProductTableSubOrder);
