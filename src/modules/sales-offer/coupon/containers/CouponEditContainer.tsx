import { memo } from 'react';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useOfferContext } from 'modules/sales-offer/offer/contexts/OfferContext';
import OfferDetailContainer from 'modules/sales-offer/offer/containers/OfferDetailContainer';
import { Box } from '@mui/material';
import SaleOfferHeaderDetail from 'modules/sales-offer/common/components/SaleOfferHeaderDetail';

const CouponEditContainer = () => {
  const { offer, isLoading } = useOfferContext();
  useBreadcrumbName(offer?._id || '', offer?.name, isLoading);

  return (
    <Box mb={3}>
      <SaleOfferHeaderDetail />
      <OfferDetailContainer />
    </Box>
  );
};

export default memo(CouponEditContainer);
