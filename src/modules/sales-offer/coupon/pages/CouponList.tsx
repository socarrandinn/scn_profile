import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { offerFilters } from 'modules/sales-offer/offer/constants/offer.filters';
import { OFFER_STATUS_VIEWS } from 'modules/sales-offer/offer/constants/offer.filters.tabs';
import CouponListContainer from '../containers/CouponListContainer';

const CouponList = () => {
  const { t } = useTranslation('couponOrder');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'coupons'} filters={offerFilters}>
        <FilterViewProvider views={OFFER_STATUS_VIEWS} defaultView={'all'}>
          <CouponListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(CouponList);
