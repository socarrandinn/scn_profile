export const DISPATCH_BASE = '/sales/dispatches';

export const DISPATCH_ROUTE = {
  LIST: `${DISPATCH_BASE}`,
  CREATE: `${DISPATCH_BASE}/create`,
  DETAIL: (id: string) => `${DISPATCH_BASE}/${id}`,
};
