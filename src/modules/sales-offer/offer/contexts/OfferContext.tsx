import { createContext, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useFindOneOffer } from '../hooks/useFindOneOffer';
import { useParams } from 'react-router';
import { ORDER_OFFER_TYPE_ENUM } from 'modules/sales-offer/common/constants/offer.enum';
import { useFindOneCoupon } from 'modules/sales-offer/coupon/hooks/useFindOneCoupon';

// Data value of the provider context
type OfferContextValue = {
  offer?: any;
  isLoading?: boolean;
  error?: any;
};
// default value of the context
const defaultValue: OfferContextValue = {};

// create context
const OfferContext = createContext<OfferContextValue>(defaultValue);

// Proptypes of Provider component
type OfferContextProps = ChildrenProps & {
  children: any;
  type: ORDER_OFFER_TYPE_ENUM;
};

/**
 * Provider component
 * */
const OfferProvider = ({ type, ...props }: OfferContextProps) => {
  const { id } = useParams();
  const useHook = useFindOfferHook(type);
  const { data: offer, isLoading, error } = useHook(id as string);
  return <OfferContext.Provider value={{ offer, isLoading, error }} {...props} />;
};

// Default hook to retrieve context data
const useOfferContext = () => {
  const context = useContext(OfferContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { OfferProvider, useOfferContext };

const useFindOfferHook = (type: ORDER_OFFER_TYPE_ENUM) => {
  switch (type) {
    case ORDER_OFFER_TYPE_ENUM.OFFER:
      return useFindOneOffer;
    case ORDER_OFFER_TYPE_ENUM.COUPON:
      return useFindOneCoupon;
  }
};
