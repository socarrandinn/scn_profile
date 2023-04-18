import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout, PagePaperLayout } from 'layouts/index';
import { SettingMenuContent } from 'components/libs/SettingMenuContent';
import { rrhhSettingsMenu } from 'modules/rrhh/settings/setting-menu/constants/settings-module.index';

const RRHHSettingMenu = () => {
  const { t } = useTranslation('rrhh');

  return (
        <CenterPageLayout>
            <PagePaperLayout title={t('settings')}>
                {/* <PageHomeLayout title={t('main_menu.admin.section.settings.products')}> */}
                <SettingMenuContent menu={rrhhSettingsMenu}/>
                {/* </PageHomeLayout> */}
            </PagePaperLayout>
        </CenterPageLayout>
  );
};

export default memo(RRHHSettingMenu);
