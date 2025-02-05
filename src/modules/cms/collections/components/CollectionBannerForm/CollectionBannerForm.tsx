import { BannerFormPaperTitle } from 'modules/cms/banners/components/BannerFormPaperTitle';
import { FormPaper } from 'modules/common/components/FormPaper';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import DragBannerSimple from '../BannerDragAndDrop/DragBannerSimple';

const CollectionBannerForm = () => {
  const { t } = useTranslation('collection');

  return (
    <FormPaper nm title={<BannerFormPaperTitle title={t('bannerCollection')} />}>
      <DragBannerSimple />
    </FormPaper>
  );
};

export default memo(CollectionBannerForm);
