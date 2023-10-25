import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout, PagePaperLayout } from 'layouts/index';
import { SettingMenuContent } from 'components/libs/SettingMenuContent';
import { rrhhSettingsMenu } from 'modules/inventory/product/settings/setting-menu/constants/settings-module.index';

const RRHHSettingMenu = () => {
  const { t } = useTranslation('rrhh');

  return (
    <CenterPageLayout>
      <PagePaperLayout title={t('settings')}>
        <SettingMenuContent menu={rrhhSettingsMenu} translation={'rrhh'} />
      </PagePaperLayout>
    </CenterPageLayout>
  );
};

export default memo(RRHHSettingMenu);
