import { memo, useEffect } from 'react';
import MultiBannerOptions from '../components/fields/FormBannerRadioField/options/MultiBannerOptions';
import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { COLLECTION_CONTENT_TYPE } from 'modules/cms/collections/constants/collection-types';
import { useFindCollectionElements } from 'modules/cms/collections/hooks/useFindCollectionElements';
import useCollectionPositionContext from '../context/useCollectionPositionContext';

const CollectionBannerMultipleContainer = () => {
  const { collectionId } = useCollectionDetails();
  const { data } = useFindCollectionElements(collectionId as string, COLLECTION_CONTENT_TYPE.BANNER);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const collections = data?.data ?? [];
  const { onCheckPosition } = useCollectionPositionContext();

  useEffect(() => {
    if (collections?.[0]) {
      onCheckPosition(collections[0]);
    }
  }, [collections, onCheckPosition]);

  return <MultiBannerOptions collections={collections} />;
};

export default memo(CollectionBannerMultipleContainer);
