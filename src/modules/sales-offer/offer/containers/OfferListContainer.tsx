import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindOffers } from 'modules/sales-offer/offer/hooks/useFindOffers';
import { offerColumns } from 'modules/sales-offer/offer/constants/offer.columns';
import { OfferListToolbar } from 'modules/sales-offer/offer/components/OfferListToolbar';

const OfferListContainer = () => {
  const { isLoading, error, data } = useFindOffers();
  return (
    <Box>
      <TabsFilter translation={'offerOrder'} defaultView={'all'} />
      <OfferListToolbar />
      <Table columns={offerColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} select />
    </Box>
  );
};

export default memo(OfferListContainer);
