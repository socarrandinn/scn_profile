import { IOrderStatus } from '../interfaces';

export const initValues: IOrderStatus = {
  title: '',
  description: '',
  order: 0,
  allowTo: [],
  tracking: false,
  validationType: null,
  notification: {
    enabled: false,
    audience: [
      {
        target: [],
        template: '',
      },
    ],
  },
};
