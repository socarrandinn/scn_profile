import { memo } from 'react';
import { OfferProvider } from 'modules/sales-offer/offer/contexts/OfferContext';
import CouponEditContainer from '../containers/CouponEditContainer';
import { ORDER_OFFER_TYPE_ENUM } from 'modules/sales-offer/common/constants/offer.enum';

const CouponEdit = () => {
  return (
    <OfferProvider type={ORDER_OFFER_TYPE_ENUM.COUPON}>
      <CouponEditContainer />
    </OfferProvider>
  );
};

export default memo(CouponEdit);
