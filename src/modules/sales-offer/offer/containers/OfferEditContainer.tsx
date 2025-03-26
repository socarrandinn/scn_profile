import { memo } from 'react';
import { useOfferContext } from '../contexts/OfferContext';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import OfferDetailContainer from './OfferDetailContainer';
import { Box } from '@mui/material';
import SaleOfferHeaderDetail from 'modules/sales-offer/common/components/SaleOfferHeaderDetail';

const OfferEditContainer = () => {
  const { offer, isLoading } = useOfferContext();
  useBreadcrumbName(offer?._id || '', offer?.name, isLoading);

  return (
    <Box mb={3}>
      <SaleOfferHeaderDetail />
      <OfferDetailContainer />
    </Box>
  );
};

export default memo(OfferEditContainer);
