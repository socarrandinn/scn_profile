import { memo } from 'react';
import MediaStoreContainer from '../containers/MediaStoreContainer';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';

const MediaStorePage = () => {
  const { t } = useTranslation('media');
  return (
    <PagePaperLayout title={t('list')}>
      <MediaStoreContainer />
    </PagePaperLayout>
  );
};

export default memo(MediaStorePage);
