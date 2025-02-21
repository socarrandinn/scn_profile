import { memo } from 'react';
import { OfferProvider } from '../contexts/OfferContext';
import OfferEditContainer from '../containers/OfferEditContainer';
import { ORDER_OFFER_TYPE_ENUM } from 'modules/sales-offer/common/constants/offer.enum';

const OfferEdit = () => {
  return (
    <OfferProvider type={ORDER_OFFER_TYPE_ENUM.OFFER}>
      <OfferEditContainer />
    </OfferProvider>
  );
};

export default memo(OfferEdit);
