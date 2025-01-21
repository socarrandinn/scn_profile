import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { useFindCollectionElements } from 'modules/cms/collections/hooks/useFindCollectionElements';
import { memo } from 'react';

const CollectionBannerDetailSection = () => {
  const { collectionId } = useCollectionDetails();
  const data = useFindCollectionElements(collectionId);
  return (
    <div>
      <pre> {JSON.stringify(data, null, 2)} </pre>
    </div>
  );
};

export default memo(CollectionBannerDetailSection);
