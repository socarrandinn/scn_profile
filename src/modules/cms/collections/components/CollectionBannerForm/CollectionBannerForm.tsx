import { BannerFormPaperTitle } from 'modules/cms/banners/components/BannerFormPaperTitle';
import { FormPaper } from 'modules/common/components/FormPaper';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import CollectionEmpty from './CollectionEmpty';
import { useCollectionDetails } from '../../context/CollectionContext';
import { COLLECTION_BANNER_TYPE } from '../../constants/collection-types';

const CollectionBannerForm = () => {
  const { t } = useTranslation('collection');
  const { collection } = useCollectionDetails();
  return (
    <FormPaper nm title={<BannerFormPaperTitle title={t('bannerCollection')} />}>
      <CollectionEmpty bannerType={collection?.subType as COLLECTION_BANNER_TYPE} />
    </FormPaper>
  );
};

export default memo(CollectionBannerForm);
