import { TabRouteType } from '@dfl/react-security';
import {
  orderActivityTab,
  orderGeneralTab,
  orderHistoryChangeTab,
  orderProductTab,
  orderSEOTab,
} from 'modules/sales/common/constants/order.tabs';

const path = '/sales/pre-orders';

export const preOrderTabs: TabRouteType[] = [
  orderGeneralTab(path),
  orderProductTab(path),
  orderActivityTab(path),
  orderSEOTab(path),
  orderHistoryChangeTab(path),
];
