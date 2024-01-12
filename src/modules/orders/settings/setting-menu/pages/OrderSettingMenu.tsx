import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout, PagePaperLayout } from 'layouts/index';
import { SettingMenuContent } from 'components/libs/SettingMenuContent';
import { providersModuleMenu, storeSettingsMenu } from 'modules/orders/settings/setting-menu/constants';

const OrderSettingMenu = () => {
  const { t } = useTranslation('store');

  return (
        <CenterPageLayout>
            <PagePaperLayout title={t('providers')}>
                <SettingMenuContent menu={providersModuleMenu} translation={'store'}/>
            </PagePaperLayout>
            <PagePaperLayout title={t('settings')}>
                <SettingMenuContent menu={storeSettingsMenu} translation={'store'}/>
            </PagePaperLayout>
        </CenterPageLayout>
  );
};

export default memo(OrderSettingMenu);
