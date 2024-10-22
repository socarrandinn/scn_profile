export const PRE_ROUTER_BASE = '/sales/pre-orders';

export const PRE_ORDER_ROUTE = {
  LIST: `${PRE_ROUTER_BASE}`,
  CREATE: `${PRE_ROUTER_BASE}/create`,
  DETAIL: (id: string) => `${PRE_ROUTER_BASE}/${id}/general`,
};
