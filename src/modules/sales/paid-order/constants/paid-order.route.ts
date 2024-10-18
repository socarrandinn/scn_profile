export const PAID_ROUTER_BASE = '/sales/orders';

export const PAID_ORDER_ROUTE = {
  LIST: `${PAID_ROUTER_BASE}`,
  CREATE: `${PAID_ROUTER_BASE}/create`,
  DETAIL: (id: string) => `${PAID_ROUTER_BASE}/${id}/general`,
};
