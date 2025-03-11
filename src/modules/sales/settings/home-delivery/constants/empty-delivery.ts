import { ADDRESS_COUNTRY_CODE } from 'settings/address-location';
import { COST_TYPE } from '../../common/constants';
import { IDelivery } from '../../common/interfaces';

export const emptyDelivery: IDelivery = {
  price: 0,
  weightPrice: {
    price: 0,
    value: 0,
  },
  global: false,
  customPrice: COST_TYPE.BASE,
  volumePrice: {
    price: 0,
    value: 0,
  },
  time: {
    from: 0,
    to: 1,
  },
  hasExpress: false,
  expressPrice: 0,
  expressTime: {
    from: 0,
    to: 1,
  },
  location: {
    type: null,
    city: '',
    state: '',
    country: ADDRESS_COUNTRY_CODE === 'CU' ? 'CU' : '',
  },
};
