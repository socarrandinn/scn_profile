import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import OfferListContainer from 'modules/sales-offer/offer/containers/OfferListContainer';
import { offerFilters } from 'modules/sales-offer/offer/constants/offer.filters';

const OfferList = () => {
  const { t } = useTranslation('offer');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'offers'} filters={offerFilters}>
        <OfferListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(OfferList);
