import { ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/constants';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';

export const subOrderExcludeStatus = [
  ORDER_STATUS_TYPE_ENUM.CREATED,
  ORDER_STATUS_TYPE_ENUM.VALIDATED,
  ORDER_STATUS_TYPE_ENUM.PAID,
  ORDER_STATUS_TYPE_ENUM.ERROR,
  ORDER_STATUS_TYPE_ENUM.CANCELED,
];

export const isSubOrderStatusReadOnly = (status: IOrderStatus) => {
  if (!status?.type) return true;
  if (subOrderExcludeStatus.includes(status?.type)) return true;
};

export const StatusMock = [
  {
    _id: '67e37122a5bd7990f9fc5b26',
    space: '678e76542365b4e6393f2220',
    color: '#6c1a1a',
    isSystem: true,
    type: 'REFUNDED',
    tracking: false,
    allowTo: [],
    order: 7,
    notification: {
      enabled: true,
      audience: [
        {
          target: ['BILLING_CLIENT'],
          template: 'refunded',
        },
        {
          target: ['ADMIN'],
          template: 'admin-refunded',
        },
      ],
    },
    title: 'Devolución',
    description: 'Devolución',
    createdAt: '2025-03-26T03:14:42.042Z',
    updatedAt: '2025-03-26T03:14:42.042Z',
  },
  {
    _id: '67e37121a5bd7990f9fc5b22',
    space: '678e76542365b4e6393f2220',
    color: '#c55353',
    isSystem: true,
    type: 'PENDING_REFUNDED',
    tracking: false,
    allowTo: [],
    order: 6,
    notification: {
      enabled: true,
      audience: [
        {
          target: ['ADMIN'],
          template: 'admin-pending-refunded',
        },
      ],
    },
    title: 'Devolución Pendiente',
    description: 'Devolución pendiente',
    createdAt: '2025-03-26T03:14:41.980Z',
    updatedAt: '2025-03-26T03:14:41.980Z',
  },
  {
    _id: '67e37121a5bd7990f9fc5b20',
    space: '678e76542365b4e6393f2220',
    color: '#41af0b',
    isSystem: true,
    type: 'COMPLETED',
    tracking: true,
    allowTo: [],
    order: 5,
    notification: {
      enabled: false,
      audience: [],
    },
    title: 'Completada',
    description: 'Orden completada',
    createdAt: '2025-03-26T03:14:41.951Z',
    updatedAt: '2025-03-26T03:14:41.951Z',
  },
  {
    _id: '67e37121a5bd7990f9fc5b1a',
    space: '678e76542365b4e6393f2220',
    color: '#f5ad36',
    isSystem: true,
    type: 'PENDING_PAYMENT',
    tracking: false,
    allowTo: [],
    order: 2,
    notification: {
      enabled: false,
      audience: [],
    },
    title: 'Pendiente a Pago',
    description: 'Orden pendiente a pago',
    createdAt: '2025-03-26T03:14:41.896Z',
    updatedAt: '2025-03-26T03:14:41.896Z',
  },
];
