import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindOffers } from 'modules/sales-offer/offer/hooks/useFindOffers';
import { offerColumns } from 'modules/sales-offer/offer/constants/offer.columns';
import { OfferListToolbar } from 'modules/sales-offer/offer/components/OfferListToolbar';
import OfferEditModal from 'modules/sales-offer/offer/containers/OfferEditModal';

const OfferListContainer = () => {
  const { isLoading, error, data } = useFindOffers();
  return (
    <Box>
      <OfferListToolbar />
      <Table
        columns={offerColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <OfferEditModal />
    </Box>
  );
};

export default memo(OfferListContainer);
