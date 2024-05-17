import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout, PagePaperLayout } from 'layouts/index';
import { SettingMenuContent } from 'components/libs/SettingMenuContent';
import { offerManagementMenu } from '../constants';

const SeoSettingMenu = () => {
  const { t } = useTranslation('seo');

  return (
    <CenterPageLayout>
      <PagePaperLayout title={t('settings.title')}>
        <SettingMenuContent menu={offerManagementMenu} translation={'seo'} />
      </PagePaperLayout>
    </CenterPageLayout>
  );
};

export default memo(SeoSettingMenu);
