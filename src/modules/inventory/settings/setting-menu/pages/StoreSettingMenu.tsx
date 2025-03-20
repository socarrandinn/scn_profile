import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout, PagePaperLayout } from 'layouts/index';
import { SettingMenuContent } from 'components/libs/SettingMenuContent';
import { providersModuleMenu, storeSettingsMenu } from 'modules/inventory/settings/setting-menu/constants';

const StoreSettingMenu = () => {
  const { t } = useTranslation('warehouse');

  return (
    <CenterPageLayout>
      <PagePaperLayout title={t('providers')}>
        <SettingMenuContent menu={providersModuleMenu} translation={'warehouse'} />
      </PagePaperLayout>
      <PagePaperLayout title={t('settings')}>
        <SettingMenuContent menu={storeSettingsMenu} translation={'warehouse'} />
      </PagePaperLayout>
    </CenterPageLayout>
  );
};

export default memo(StoreSettingMenu);
