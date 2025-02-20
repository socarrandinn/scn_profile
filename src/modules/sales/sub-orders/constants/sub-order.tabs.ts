import { TabRouteType } from '@dfl/react-security';
import { orderActivityTab, orderGeneralTab, orderProductTab } from 'modules/sales/common/constants/order.tabs';
import { SUB_ROUTER_BASE } from './sub-order.route';

const path = SUB_ROUTER_BASE;

export const subOrderTabs: TabRouteType[] = [orderGeneralTab(path), orderProductTab(path), orderActivityTab(path)];
