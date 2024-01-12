import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CenterPageLayout, PagePaperLayout } from 'layouts/index';
import { SettingMenuContent } from 'components/libs/SettingMenuContent';
import {
  orderSettingMenu,
} from 'modules/sales/settings/setting-menu/constants';

const OrderSettingMenu = () => {
  const { t } = useTranslation('sales');

  return (
    <CenterPageLayout>
      <PagePaperLayout title={t('settings')}>
        <SettingMenuContent menu={orderSettingMenu} translation={'store'} />
      </PagePaperLayout>
    </CenterPageLayout>
  );
};

export default memo(OrderSettingMenu);
