import { IOrderStatus } from '../interfaces';

export const initValues: IOrderStatus = {
  title: '',
  description: '',
  order: 0,
  allowTo: [],
  tracking: false,
  notification: {
    enabled: false,
    audience: [{
      target: [],
      template: '',
    }],
  },
};
