import { CouponCreate, CouponEdit, CouponList } from 'modules/sales-offer/coupon/pages';
import { RouteConfig } from '@dfl/react-security';
import { COUPON_PERMISSIONS } from '../constants/coupon.permissions';

const routes: RouteConfig = {
  OfferList: {
    path: '/',
    permissions: COUPON_PERMISSIONS.COUPON_VIEW,
    component: CouponList,
  },

  OfferCreate: {
    path: '/create',
    component: CouponCreate,
    permissions: COUPON_PERMISSIONS.COUPON_VIEW,
  },

  OfferEdit: {
    path: '/:id',
    exact: true,
    component: CouponEdit,
    permissions: COUPON_PERMISSIONS.COUPON_VIEW,
  },
};

export default routes;
