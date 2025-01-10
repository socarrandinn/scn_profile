import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { memo } from 'react';
import CollectionBannerDropZoneForm from './CollectionBannerDropZoneForm/CollectionBannerDropZoneForm';

const BannerContent = () => {
  return (
    <DetailLayout>
      <DetailContent ghost>
        <CollectionBannerDropZoneForm />
      </DetailContent>
      <DetailSummary ghost>dffff</DetailSummary>
    </DetailLayout>
  );
};

export default memo(BannerContent);
