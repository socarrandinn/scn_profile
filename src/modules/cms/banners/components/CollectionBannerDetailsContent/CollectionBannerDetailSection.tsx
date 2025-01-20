import { memo } from 'react';
import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { useFindCollectionElements } from 'modules/cms/collections/hooks/useFindCollectionElements';

const CollectionBannerDetailSection = () => {
  const { collectionId } = useCollectionDetails();
  const data = useFindCollectionElements(collectionId);

  console.log(data, 'data');
  return <div></div>;
};

export default memo(CollectionBannerDetailSection);
