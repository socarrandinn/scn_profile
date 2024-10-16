import { ExistFilter } from '@dofleini/query-builder';

export enum OFFER_COUPON_VALUES {
  OFFER_TRUE = 'oTrue',
  OFFER_FALSE = 'oFalse',
  COUPON_TRUE = 'cTrue',
  COUPON_FALSE = 'cFalse',
}

export const getOfferCouponFilter = (value: OFFER_COUPON_VALUES) => {
  switch (value) {
    case OFFER_COUPON_VALUES.OFFER_TRUE: {
      return new ExistFilter({
        field: 'offers.id',
        value: true
      });
    }
    case OFFER_COUPON_VALUES.OFFER_FALSE: {
      return new ExistFilter({
        field: 'offers.id',
        value: false
      });
    }
    case OFFER_COUPON_VALUES.COUPON_TRUE: {
      return new ExistFilter({
        field: 'coupon',
        value: true
      });
    }
    case OFFER_COUPON_VALUES.COUPON_FALSE: {
      return new ExistFilter({
        field: 'coupon',
        value: false
      });
    }
  }
};
