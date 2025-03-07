import { TabRouteType } from '@dfl/react-security';
import { orderActivityTab, orderGeneralTab } from 'modules/sales/common/constants/order.tabs';
import { PRE_ROUTER_BASE } from './pre-order.route';

const path = PRE_ROUTER_BASE;

export const preOrderTabs: TabRouteType[] = [orderGeneralTab(path), orderActivityTab(path)];
