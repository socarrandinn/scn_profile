import { Stack } from '@mui/material';
import DiscountAmountIcon from 'components/icons/offer-sales/DiscountAmountIcon';
import IncomeAmountIcon from 'components/icons/offer-sales/IncomeAmountIcon';
import OfferCartIcon from 'components/icons/offer-sales/OfferCartIcon';
import OfferCustomerIcon from 'components/icons/offer-sales/OfferCustomerIcon';
import { CounterBox } from 'components/libs/analytic/CounterBox';

import { useTranslation } from 'react-i18next';
import { GREEN } from 'settings/theme';

const ProductDiscountSummary = () => {
  const { t } = useTranslation('report');
  return (
    <Stack gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap'>
      <CounterBox
        title={t('report.offer.summary.products')}
        value={150}
        flexGrow={1}
        currency={false}
        // @ts-ignore
        icon={OfferCartIcon}
        colorIcon={GREEN}
        sx={{ maxWidth: 300, width: '100%' }}
      />
      <CounterBox
        title={t('report.offer.summary.customers')}
        value={30}
        flexGrow={1}
        currency={false}
        // @ts-ignore
        icon={OfferCustomerIcon}
        colorIcon={GREEN}

        // variant='contented'
      />
      <CounterBox
        title={t('report.offer.summary.discountAmount')}
        value={150}
        flexGrow={1}
        currency={false}
        // @ts-ignore
        icon={DiscountAmountIcon}
        colorIcon={GREEN}

        // variant='contented'
      />

      <CounterBox
        title={t('report.offer.summary.IncomeAmount')}
        value={800}
        flexGrow={1}
        currency={false}
        // @ts-ignore
        icon={IncomeAmountIcon}
        colorIcon={GREEN}

        // variant='contented'
      />
    </Stack>
  );
};

export default ProductDiscountSummary;
