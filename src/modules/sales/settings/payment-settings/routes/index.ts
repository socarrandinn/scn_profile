import { PaymentSettingsList } from 'modules/sales/settings/payment-settings/pages';
import { RouteConfig } from '@dfl/react-security';
import { PAYMENT_SETTINGS_PERMISSIONS } from 'modules/sales/settings/payment-settings/constants/payment-settings.permissions';

const routes: RouteConfig = {
  PaymentSettingsList: {
    path: '/',
    permissions: PAYMENT_SETTINGS_PERMISSIONS.PAYMENT_SETTINGS_VIEW,
    component: PaymentSettingsList,
  },
};

export default routes;
