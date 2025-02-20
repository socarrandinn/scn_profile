import { createContext, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useFindOneOffer } from '../hooks/useFindOneOffer';
import { useParams } from 'react-router';

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
};

/**
 * Provider component
 * */
const OfferProvider = (props: OfferContextProps) => {
  const { id } = useParams();
  const { data: offer, isLoading, error } = useFindOneOffer(id as string);
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
