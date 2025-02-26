import { BannerFormPaperTitle } from 'modules/cms/banners/components/BannerFormPaperTitle';
import { FormPaper } from 'modules/common/components/FormPaper';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { COLLECTION_BANNER_TYPE } from '../../constants/collection-types';
import { DragBannerMultipleContent, DragBannerSideBySideContent, DragBannerSimpleContent } from '../BannerDragAndDrop/DragBanner';
import { useCollectionDetails } from '../../context/CollectionContext';

const Component = {
  [COLLECTION_BANNER_TYPE.SIMPLE_BANNER]: DragBannerSimpleContent,
  [COLLECTION_BANNER_TYPE.MULTI_BANNER]: DragBannerMultipleContent,
  [COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER]: DragBannerSideBySideContent,
};

const CollectionBannerForm = () => {
  const { t } = useTranslation('collection');
  const { collection } = useCollectionDetails();

  const Content = useMemo(
    () => (collection?.type ? Component[collection.type] : DragBannerSimpleContent),
    [collection?.type],
  );

  return (
    <FormPaper nm title={<BannerFormPaperTitle title={t('bannerCollection')} />}>
      <Content />
    </FormPaper>
  );
};

export default memo(CollectionBannerForm);
