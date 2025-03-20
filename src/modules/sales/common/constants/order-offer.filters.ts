import { ExistFilter, TermFilter } from '@dofleini/query-builder';

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
        field: 'offers._id',
        value: true,
      });
    }
    case OFFER_COUPON_VALUES.OFFER_FALSE: {
      return new ExistFilter({
        field: 'offers._id',
        value: false,
      });
    }
    case OFFER_COUPON_VALUES.COUPON_TRUE: {
      return new TermFilter({
        field: 'offers.isCoupon',
        value: true,
      });
    }
    case OFFER_COUPON_VALUES.COUPON_FALSE: {
      return new TermFilter({
        field: 'offers.isCoupon',
        value: false,
      });
    }
  }
};
