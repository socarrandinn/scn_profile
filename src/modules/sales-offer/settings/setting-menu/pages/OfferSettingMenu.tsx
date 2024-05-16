import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout, PagePaperLayout } from 'layouts/index';
import { SettingMenuContent } from 'components/libs/SettingMenuContent';
import { offerManagementMenu } from '../constants';

const OfferSettingMenu = () => {
  const { t } = useTranslation('offers');

  return (
    <CenterPageLayout>
      <PagePaperLayout title={t('offerSettings')}>
        <SettingMenuContent menu={offerManagementMenu} translation={'sales'} />
      </PagePaperLayout>
    </CenterPageLayout>
  );
};

export default memo(OfferSettingMenu);
