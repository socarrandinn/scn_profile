import { useFindCollectionElements } from 'modules/cms/collections/hooks/useFindCollectionElements';
import { memo } from 'react';
import SkeletonBannerItem from './DragBannerItem/SkeletonBannerItem';
import { HandlerError } from '@dfl/mui-react-common';

import DragBannerList from './DragBannerItem/DragBannerList';

type Props = {
  collectionId: string;
};

const DragBannerSimple = ({ collectionId }: Props) => {
  const { data, isLoading, error } = useFindCollectionElements(collectionId);

  if (isLoading) {
    return <SkeletonBannerItem />;
  }

  if (error) {
    return <HandlerError error={error} />;
  }

  return <DragBannerList banners={data?.data} collectionId={collectionId}/>;
};

export default memo(DragBannerSimple);
