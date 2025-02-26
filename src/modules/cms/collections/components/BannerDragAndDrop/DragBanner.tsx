import { COLLECTION_BANNER_TYPE } from '../../constants/collection-types';
import DragBannerSimple from './DragBannerSimple';
import { useCollectionDetails } from '../../context/CollectionContext';
import useCollectionPositionContext from 'modules/cms/banners/context/useCollectionPositionContext';

export const DragBannerSideBySideContent = () => {
  const { collection } = useCollectionPositionContext();

  return (
    <DragBannerSimple
      bannerType={COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER}
      collectionId={collection?._id as string}
    />
  );
};

export const DragBannerMultipleContent = () => {
  const { collection } = useCollectionPositionContext();

  return (
    <DragBannerSimple
      bannerType={COLLECTION_BANNER_TYPE.MULTI_BANNER}
      collectionId={collection?._id as string}
    />
  );
};

export const DragBannerSimpleContent = () => {
  const { collectionId } = useCollectionDetails();

  return <DragBannerSimple bannerType={COLLECTION_BANNER_TYPE.SIMPLE_BANNER} collectionId={collectionId as string} />;
};
