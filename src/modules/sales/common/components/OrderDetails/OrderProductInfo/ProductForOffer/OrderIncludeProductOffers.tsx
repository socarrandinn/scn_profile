import { memo } from 'react';

import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ProductForOfferTable from './ProductForOfferTable';
import { IOrderOfferItem } from 'modules/sales/common/interfaces/IOrderOfferItem';

type OrderIncludeProductOffersProps = {
  itemOffers: IOrderOfferItem[];
};

const OrderIncludeProductOffers = ({ itemOffers }: OrderIncludeProductOffersProps) => {
  const { t } = useTranslation('order');

  return (
    <Stack gap={{ xs: 1, md: 2 }}>
      <Typography variant='h2'>{t('includeProductOfferList')}</Typography>
      <ProductForOfferTable items={itemOffers} />
    </Stack>
  );
};

export default memo(OrderIncludeProductOffers);
