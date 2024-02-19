import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout, PagePaperLayout } from 'layouts/index';
import { SettingMenuContent } from 'components/libs/SettingMenuContent';
import { orderManagementMenu, shippingSettingsMenu } from 'modules/sales/settings/setting-menu/constants';

const SalesSettingMenu = () => {
  const { t } = useTranslation('sales');

  return (
    <CenterPageLayout>
      <PagePaperLayout title={t('shippingSettings')}>
        <SettingMenuContent menu={shippingSettingsMenu} translation={'sales'} />
      </PagePaperLayout>
      <PagePaperLayout title={t('orderManagement')}>
        <SettingMenuContent menu={orderManagementMenu} translation={'sales'} />
      </PagePaperLayout>
    </CenterPageLayout>
  );
};

export default memo(SalesSettingMenu);
