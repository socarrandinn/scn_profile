import { useFindCollectionElements } from 'modules/cms/collections/hooks/useFindCollectionElements';
import { memo } from 'react';
import SkeletonBannerItem from './DragBannerItem/SkeletonBannerItem';
import { HandlerError } from '@dfl/mui-react-common';
import DragBannerList from './DragBannerItem/DragBannerList';
import CollectionEmpty from '../CollectionBannerForm/CollectionEmpty';
import { COLLECTION_BANNER_TYPE, COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';
import { Stack } from '@mui/material';
import CollectionAddElementDropDown from '../CollectionAddElement/CollectionAddElementDropDown';

type Props = {
  collectionId: string;
  bannerType: COLLECTION_BANNER_TYPE;
};

const DragBannerSimple = ({ bannerType, collectionId }: Props) => {
  const { data, isLoading, error } = useFindCollectionElements(collectionId, COLLECTION_CONTENT_TYPE.BANNER);

  if (isLoading) {
    return <SkeletonBannerItem />;
  }

  if (error) {
    return <HandlerError error={error} />;
  }

  if (data?.data.length === 0) {
    return (
      <Stack gap={2}>
        <CollectionEmpty bannerType={bannerType} />
        <CollectionAddElementDropDown collectionId={collectionId} />
      </Stack>
    );
  }

  return (
    <Stack gap={2}>
      <CollectionAddElementDropDown collectionId={collectionId} />
      <DragBannerList banners={data?.data} collectionId={collectionId} />
    </Stack>
  );
};

export default memo(DragBannerSimple);
