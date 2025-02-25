import { memo, useEffect } from 'react';
import DoubleBannerOptions from '../components/fields/FormBannerRadioField/options/DoubleBannerOptions';
import { useFindCollectionElements } from 'modules/cms/collections/hooks/useFindCollectionElements';
import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { COLLECTION_CONTENT_TYPE } from 'modules/cms/collections/constants/collection-types';
import useCollectionPositionContext from '../context/useCollectionPositionContext';

const CollectionBannerDoubleContainer = () => {
  const { collectionId } = useCollectionDetails();
  const { data } = useFindCollectionElements(collectionId as string, COLLECTION_CONTENT_TYPE.BANNER);
  const { onCheckPosition } = useCollectionPositionContext();
  const [position1, position2] = data?.data ?? [];

  useEffect(() => {
    if (position1) {
      onCheckPosition(position1);
    }
  }, [onCheckPosition, position1]);

  return <DoubleBannerOptions collection1={position1} collection2={position2} />;
};

export default memo(CollectionBannerDoubleContainer);
