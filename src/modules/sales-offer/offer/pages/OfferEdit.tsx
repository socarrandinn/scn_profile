import { memo } from 'react';
import { OfferProvider } from '../contexts/OfferContext';
import OfferEditContainer from '../containers/OfferEditContainer';

const OfferEdit = () => {
  return (
    <OfferProvider>
      <OfferEditContainer />
    </OfferProvider>
  );
};

export default memo(OfferEdit);
