import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import OfferListContainer from 'modules/sales-offer/offer/containers/OfferListContainer';
import { offerFilters } from 'modules/sales-offer/offer/constants/offer.filters';
import { OFFER_STATUS_VIEWS } from '../constants/offer.filters.tabs';

const OfferList = () => {
  const { t } = useTranslation('offerOrder');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'offers'} filters={offerFilters}>
        <FilterViewProvider views={OFFER_STATUS_VIEWS} defaultView={'all'}>
          <OfferListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(OfferList);
