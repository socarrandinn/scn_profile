import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { DELIVERY_TIME_TYPE_ENUM } from '../constants/order.enum';
import { ORDER_EXPRESS_SHIPPING_DESTINATIONS } from '../constants/order-query';
import orderShippingExpressDestinationService from '../services/order-shipping-express-destination.service';

export const useOrderGetSettings = (shippingType?: DELIVERY_TIME_TYPE_ENUM, store?: string) => {
  const { t } = useTranslation('order');
  const { data, isLoading } = useQuery(
    [ORDER_EXPRESS_SHIPPING_DESTINATIONS],
    orderShippingExpressDestinationService.searchAll,
  );

  const atLeastAnyWithExpress = useMemo(() => data?.stores?.includes(store as string), [data?.stores, store]);

  const shipping = useMemo(() => {
    if (!atLeastAnyWithExpress && shippingType === DELIVERY_TIME_TYPE_ENUM.EXPRESS) {
      return DELIVERY_TIME_TYPE_ENUM.REGULAR;
    }
    return shippingType;
  }, [shippingType, atLeastAnyWithExpress]);

  const shippingText = useMemo(() => {
    if (!atLeastAnyWithExpress && shippingType === DELIVERY_TIME_TYPE_ENUM.EXPRESS) {
      return t(`shipping.deliveryTimeType.${shipping as string}.withFreeShipping`);
    }
    return t(`shipping.deliveryTimeType.${shipping as string}.withoutFreeShipping`);
  }, [atLeastAnyWithExpress, shippingType, t, shipping]);

  return {
    isLoading,
    atLeastAnyWithExpress,
    shipping,
    shippingText,
  };
};
