import { BannerFormPaperTitle } from 'modules/cms/banners/components/BannerFormPaperTitle';
import { FormPaper } from 'modules/common/components/FormPaper';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import CollectionEmpty from './CollectionEmpty';
import { useCollectionDetails } from '../../context/CollectionContext';
import { COLLECTION_BANNER_TYPE } from '../../constants/collection-types';

import DragBannerSimple from '../BannerDragAndDrop/DragBannerSimple';
import { isEmpty } from 'lodash';

const CollectionBannerForm = () => {
  const { t } = useTranslation('collection');
  const { collection, collectionId } = useCollectionDetails();

  const elements = useMemo(() => collection?.elements || [], [collection?.elements]);
  return (
    <FormPaper nm title={<BannerFormPaperTitle title={t('bannerCollection')} />}>
      <CollectionEmpty bannerType={collection?.subType as COLLECTION_BANNER_TYPE} elements={elements} />
      {!isEmpty(elements) && <DragBannerSimple collectionId={collectionId as string} />}
    </FormPaper>
  );
};

export default memo(CollectionBannerForm);
