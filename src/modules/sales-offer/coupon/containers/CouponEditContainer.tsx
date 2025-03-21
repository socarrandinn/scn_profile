import { memo } from 'react';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useOfferContext } from 'modules/sales-offer/offer/contexts/OfferContext';
import OfferDetailContainer from 'modules/sales-offer/offer/containers/OfferDetailContainer';

const CouponEditContainer = () => {
  const { offer, isLoading } = useOfferContext();
  useBreadcrumbName(offer?._id || '', offer?.name, isLoading);

  return <OfferDetailContainer />;
};

export default memo(CouponEditContainer);
