import { memo } from 'react';

import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IOrderOfferItem } from 'modules/sales/common/interfaces/IOrderOfferItem';

type OrderIncludeProductsProps = {
  offerProducts: IOrderOfferItem[];
};

const OrderIncludeProducts = ({ offerProducts }: OrderIncludeProductsProps) => {
  const { t } = useTranslation('order');
  return (
    <Stack gap={{ xs: 1, md: 2 }}>
      <Typography variant='h2'>{t('includeProductList')}</Typography>
      {/* <ProductTable items={offerProducts} /> */}
    </Stack>
  );
};

export default memo(OrderIncludeProducts);
