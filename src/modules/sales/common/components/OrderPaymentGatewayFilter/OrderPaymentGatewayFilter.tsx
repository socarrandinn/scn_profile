import { memo, useMemo } from 'react';
import { FilterProps, FixedListFilter } from '@dfl/mui-admin-layout';
import { ALLOWED_PAYMENT_METHODS } from 'settings/globals';

const OrderPaymentGatewayFilter = ({ filter, ...props }: FilterProps) => {
  const options = useMemo(
    () =>
      ALLOWED_PAYMENT_METHODS?.map((gateway) => ({
        value: gateway,
        translate: true,
        label: `order:gateway:${gateway}`,
      })),
    [],
  );

  return <FixedListFilter filter={filter} {...props} options={options} />;
};

export default memo(OrderPaymentGatewayFilter);
