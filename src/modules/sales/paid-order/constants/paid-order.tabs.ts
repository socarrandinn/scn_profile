import { TabRouteType } from '@dfl/react-security';
import {
  orderActivityTab,
  orderGeneralTab,
  orderHistoryChangeTab,
  orderProductTab,
} from 'modules/sales/common/constants/order.tabs';

const path = '/sales/orders';

export const paidOrderTabs: TabRouteType[] = [
  orderGeneralTab(path),
  orderProductTab(path),
  orderActivityTab(path),

  orderHistoryChangeTab(path),
];
