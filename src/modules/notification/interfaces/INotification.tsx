export interface INotification {
  _id: string;
  title: string;
  type: NOTIFICATION_TYPE;
  message: string;
  data: INotificationData;
  important: boolean;
  createdAt: string;
}

export interface INotificationData {
  _id: string;
  name: string;
  owner: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: {
      thumb: string;
      url: string;
      width: number;
      height: number;
      sizes: any[];
      _id: string;
    };
  };
}

export enum NOTIFICATION_TYPE {
  NEW_LOGISTIC_PROVIDER = 'NEW_LOGISTIC_PROVIDER',
  NEW_PRODUCT_PROVIDER = 'NEW_PRODUCT_PROVIDER',
  EXPRESS_DELIVERY_ACTIVE = 'EXPRESS_DELIVERY_ACTIVE',
}
