import { useFindCollectionElements } from 'modules/cms/collections/hooks/useFindCollectionElements';
import { memo } from 'react';
import SkeletonBannerItem from './DragBannerItem/SkeletonBannerItem';
import { HandlerError } from '@dfl/mui-react-common';

import DragBannerList from './DragBannerItem/DragBannerList';
import CollectionEmpty from '../CollectionBannerForm/CollectionEmpty';
import { useCollectionDetails } from '../../context/CollectionContext';
import { COLLECTION_BANNER_TYPE, COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';
import { Stack } from '@mui/material';
import CollectionAddElementBannerButton from '../CollectionAddElement/CollectionAddElementBannerButton';

const DragBannerSimple = () => {
  const { collection, collectionId, contentType } = useCollectionDetails();
  const { data, isLoading, error } = useFindCollectionElements(
    collectionId as string,
    contentType as COLLECTION_CONTENT_TYPE,
  );

  if (isLoading) {
    return <SkeletonBannerItem />;
  }

  if (error) {
    return <HandlerError error={error} />;
  }

  if (data?.data.length === 0) {
    return (
      <Stack gap={2}>
        <CollectionEmpty bannerType={collection?.subType as COLLECTION_BANNER_TYPE} />
        <CollectionAddElementBannerButton
          contentType={COLLECTION_CONTENT_TYPE.BANNER}
          buttonProps={{ fullWidth: true }}
        />
      </Stack>
    );
  }

  return (
    <Stack gap={2}>
      <CollectionAddElementBannerButton
        contentType={COLLECTION_CONTENT_TYPE.BANNER}
        buttonProps={{ fullWidth: true }}
      />
      <DragBannerList banners={data?.data} collectionId={collectionId as string} />
    </Stack>
  );
};

export default memo(DragBannerSimple);
