export const SYSTEM_STATUS_TYPE: { [key: string]: boolean } = {
  CREATED: true,
  PENDING_PAYMENT: true,
  PAYED: true,
  REFUNDED: true,
  PENDING_REFUNDED: true,
};

export const STATUS_ORDER_FLOW: {
  [key: string]: { [key: string]: boolean };
} = {
  CREATED: {
    CREATED: true,
    ENDED: false,
    ERROR: true,
    CANCELED: true,
    PENDING_PAYMENT: false,
    PAYED: false,
    PENDING_REFUNDED: false,
    REFUNDED: false,
    VALIDATE: true,
    CUSTOM: false,
  },
  ENDED: {
    CREATED: false,
    ENDED: true,
    ERROR: false,
    CANCELED: false,
    PENDING_PAYMENT: false,
    PAYED: false,
    PENDING_REFUNDED: false,
    REFUNDED: false,
    VALIDATE: false,
    CUSTOM: false,
  },
  ERROR: {
    CREATED: false,
    ENDED: false,
    ERROR: true,
    CANCELED: false,
    PENDING_PAYMENT: false,
    PAYED: false,
    PENDING_REFUNDED: false,
    REFUNDED: false,
    VALIDATE: false,
    CUSTOM: false,
  },
  CANCELED: {
    CREATED: false,
    ENDED: false,
    ERROR: false,
    CANCELED: true,
    PENDING_PAYMENT: false,
    PAYED: false,
    PENDING_REFUNDED: false,
    REFUNDED: false,
    VALIDATE: false,
    CUSTOM: false,
  },
  PENDING_PAYMENT: {
    CREATED: false,
    ENDED: false,
    ERROR: true,
    CANCELED: true,
    PENDING_PAYMENT: true,
    PAYED: false,
    PENDING_REFUNDED: false,
    REFUNDED: false,
    VALIDATE: false,
    CUSTOM: false,
  },
  PAYED: {
    CREATED: false,
    ENDED: false,
    ERROR: true,
    CANCELED: true,
    PENDING_PAYMENT: false,
    PAYED: true,
    PENDING_REFUNDED: false,
    REFUNDED: false,
    VALIDATE: true,
    CUSTOM: false,
  },
  PENDING_REFUNDED: {
    CREATED: false,
    ENDED: false,
    ERROR: false,
    CANCELED: false,
    PENDING_PAYMENT: false,
    PAYED: false,
    PENDING_REFUNDED: true,
    REFUNDED: false,
    VALIDATE: false,
    CUSTOM: false,
  },
  REFUNDED: {
    CREATED: false,
    ENDED: false,
    ERROR: false,
    CANCELED: false,
    PENDING_PAYMENT: false,
    PAYED: false,
    PENDING_REFUNDED: false,
    REFUNDED: true,
    VALIDATE: false,
    CUSTOM: false,
  },
  VALIDATE: {
    CREATED: false,
    ENDED: true,
    ERROR: true,
    CANCELED: true,
    PENDING_PAYMENT: false,
    PAYED: false,
    PENDING_REFUNDED: false,
    REFUNDED: false,
    VALIDATE: true,
    CUSTOM: true,
  },
  CUSTOM: {
    CREATED: false,
    ENDED: true,
    ERROR: true,
    CANCELED: true,
    PENDING_PAYMENT: false,
    PAYED: false,
    PENDING_REFUNDED: false,
    REFUNDED: false,
    VALIDATE: false,
    CUSTOM: true,
  },
};

export const TERMINABLE_STATUS_LIST = Object.entries(STATUS_ORDER_FLOW)
  .filter(([key, value]): any => value.ENDED && key !== 'ENDED')
  .map(([key, value]): any => key);
