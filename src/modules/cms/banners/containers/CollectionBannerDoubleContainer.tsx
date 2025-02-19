import { memo } from 'react';

import DoubleBannerOptions from '../components/fields/FormBannerRadioField/options/DoubleBannerOptions';
import { useFindCollectionElements } from 'modules/cms/collections/hooks/useFindCollectionElements';
import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { COLLECTION_CONTENT_TYPE } from 'modules/cms/collections/constants/collection-types';

const CollectionBannerDoubleContainer = () => {
  const { collectionId } = useCollectionDetails();
  const { data } = useFindCollectionElements(collectionId as string, COLLECTION_CONTENT_TYPE.BANNER);

  return <DoubleBannerOptions banner1={data?.data?.[0]} banner2={data?.data?.[1]} />;
};

export default memo(CollectionBannerDoubleContainer);
