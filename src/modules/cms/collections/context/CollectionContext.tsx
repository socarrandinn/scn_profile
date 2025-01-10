import { createContext, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useFindOneCollections } from '../hooks/useFindOneCollections';
import { ICollection } from '../interfaces';
import { useParams } from 'react-router';
// Data value of the provider context
type CollectionContextValue = {
  collection?: ICollection;
  isLoading?: boolean;
  error?: any;
  collectionId?: string;
};
// default value of the context
const defaultValue: CollectionContextValue = {};

// create context
const CollectionContext = createContext<CollectionContextValue>(defaultValue);

// Proptypes of Provider component
type CollectionContextProps = ChildrenProps & {
  children: any;
};

/**
 * Provider component
 * */
const CollectionProvider = ({ ...props }: CollectionContextProps) => {
  const { id } = useParams();
  const collectionId: string = id as string;
  const { data, isLoading, error } = useFindOneCollections(collectionId);
  return (
    <CollectionContext.Provider
      value={{
        collection: data,
        isLoading,
        error,
        collectionId,
      }}
      {...props}
    />
  );
};

// Default hook to retrieve context data
const useCollectionDetails = () => {
  const context = useContext(CollectionContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { CollectionProvider, useCollectionDetails };
