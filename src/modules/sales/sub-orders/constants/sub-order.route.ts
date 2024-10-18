export const SUB_ROUTER_BASE = '/sales/sub-orders';

export const SUB_ORDER_ROUTE = {
  LIST: `${SUB_ROUTER_BASE}`,
  CREATE: `${SUB_ROUTER_BASE}/create`,
  DETAIL: (id: string) => `${SUB_ROUTER_BASE}/${id}/general`,
};
