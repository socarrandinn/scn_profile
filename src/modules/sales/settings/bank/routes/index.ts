import { BankList } from 'modules/sales/settings/bank/pages';
import { RouteConfig } from '@dfl/react-security';
import { BANK_PERMISSIONS } from 'modules/sales/settings/bank/constants/bank.permissions';

const routes: RouteConfig = {
  BankList: {
    path: '/',
    permissions: BANK_PERMISSIONS.BANK_VIEW,
    component: BankList,
  },
};

export default routes;
