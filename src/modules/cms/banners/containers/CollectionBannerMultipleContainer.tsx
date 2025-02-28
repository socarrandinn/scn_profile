import { memo, useEffect } from 'react';
import MultiBannerOptions from '../components/fields/FormBannerRadioField/options/MultiBannerOptions';
import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { COLLECTION_CONTENT_TYPE } from 'modules/cms/collections/constants/collection-types';
import { useFindCollectionElements } from 'modules/cms/collections/hooks/useFindCollectionElements';
import useCollectionPositionContext from '../context/useCollectionPositionContext';

const CollectionBannerMultipleContainer = () => {
  const { collectionId } = useCollectionDetails();
  const { data } = useFindCollectionElements(collectionId as string, COLLECTION_CONTENT_TYPE.BANNER);
  const { onCheckPosition } = useCollectionPositionContext();

  useEffect(() => {
    if (data?.data?.[0]) {
      onCheckPosition(data?.data[0]);
    }
  }, [data?.data, onCheckPosition]);

  return <MultiBannerOptions collections={data?.data} />;
};

export default memo(CollectionBannerMultipleContainer);
