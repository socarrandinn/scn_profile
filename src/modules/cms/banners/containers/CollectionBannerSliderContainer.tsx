import { memo } from 'react';
import SliderBannerOptions from '../components/fields/FormBannerRadioField/options/SliderBannerOptions/SliderBannerOptions';
import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { useFindCollectionElements } from 'modules/cms/collections/hooks/useFindCollectionElements';
import { COLLECTION_CONTENT_TYPE } from 'modules/cms/collections/constants/collection-types';

const CollectionBannerSliderContainer = () => {
  const { collectionId } = useCollectionDetails();
  const { data } = useFindCollectionElements(collectionId as string, COLLECTION_CONTENT_TYPE.BANNER);

  // if (data?.data?.length === 0) return null;

  return <SliderBannerOptions options={data?.data} />;
};

export default memo(CollectionBannerSliderContainer);
