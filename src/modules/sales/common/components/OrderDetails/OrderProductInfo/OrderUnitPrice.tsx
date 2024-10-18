import { CurrencyValue } from '@dfl/mui-react-common';
import { Stack } from '@mui/material';
import { IProductSnapShot } from 'modules/sales/common/interfaces/IOrderProductItem';
import { memo } from 'react';
import { ApplyRate } from 'utils/math';

type OrderUnitPriceProps = {
  unitPrice: number;
  product: IProductSnapShot;
  rate: number;
  currencyClient: string;
};

const OrderUnitPrice = ({ unitPrice, product, rate, currencyClient }: OrderUnitPriceProps) => {
  if (!product?.offer?.enabled) {
    return <CurrencyValue value={ApplyRate(unitPrice, rate)} fontWeight={600} currency={currencyClient} />;
  }

  return (
    <Stack>
      <CurrencyValue
        value={ApplyRate(product?.price, rate)}
        sx={{ textDecoration: 'line-through' }}
        currency={currencyClient}
      />
      <CurrencyValue value={ApplyRate(product?.finalPrice, rate)} fontWeight={600} currency={currencyClient} />
    </Stack>
  );
};

export default memo(OrderUnitPrice);
