export const PAYMENT_AGREEMENT_BASE = '/sales/payment-agreements';

export const PAYMENT_AGREEMENT_ROUTE = {
  LIST: `${PAYMENT_AGREEMENT_BASE}`,
  CREATE: `${PAYMENT_AGREEMENT_BASE}/create`,
  DETAIL: (id: string) => `${PAYMENT_AGREEMENT_BASE}/${id}`,
};
