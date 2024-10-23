import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout, PagePaperLayout } from 'layouts/index';
import { SettingMenuContent } from 'components/libs/SettingMenuContent';
import { crmSettingsMenu } from '../constants';

const CrmSettingMenu = () => {
  const { t } = useTranslation('crm');

  return (
    <CenterPageLayout>
      <PagePaperLayout title={t('settings.title')}>
        <SettingMenuContent menu={crmSettingsMenu} translation={'crm'} />
      </PagePaperLayout>
    </CenterPageLayout>
  );
};

export default memo(CrmSettingMenu);
