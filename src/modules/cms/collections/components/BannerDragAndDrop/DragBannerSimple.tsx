import { useFindCollectionElements } from 'modules/cms/collections/hooks/useFindCollectionElements';
import { memo } from 'react';
import SkeletonBannerItem from './DragBannerItem/SkeletonBannerItem';
import { HandlerError } from '@dfl/mui-react-common';
import DragBannerList from './DragBannerItem/DragBannerList';
import CollectionEmpty from '../CollectionBannerForm/CollectionEmpty';
import { useCollectionDetails } from '../../context/CollectionContext';
import { COLLECTION_BANNER_TYPE, COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';
import { Stack } from '@mui/material';
import CollectionAddElementDropDown from '../CollectionAddElement/CollectionAddElementDropDown';

const DragBannerSimple = () => {
  const { collection, collectionId } = useCollectionDetails();
  const { data, isLoading, error } = useFindCollectionElements(collectionId as string, COLLECTION_CONTENT_TYPE.BANNER);

  if (isLoading) {
    return <SkeletonBannerItem />;
  }

  if (error) {
    return <HandlerError error={error} />;
  }

  if (data?.data.length === 0) {
    return (
      <Stack gap={2}>
        <CollectionEmpty bannerType={collection?.type as COLLECTION_BANNER_TYPE} />
        <CollectionAddElementDropDown />
      </Stack>
    );
  }

  return (
    <Stack gap={2}>
      <CollectionAddElementDropDown />
      <DragBannerList banners={data?.data} collectionId={collectionId as string} />
    </Stack>
  );
};

export default memo(DragBannerSimple);
