import { CouponCreate, CouponDetail, CouponList } from 'modules/sales-offer/coupon/pages';
import { RouteConfig } from '@dfl/react-security';
import { COUPON_PERMISSIONS } from '../constants/coupon.permissions';

const routes: RouteConfig = {
  CouponList: {
    path: '/',
    permissions: COUPON_PERMISSIONS.COUPON_VIEW,
    component: CouponList,
  },

  CouponCreate: {
    path: '/create',
    component: CouponCreate,
    permissions: COUPON_PERMISSIONS.COUPON_VIEW,
  },

  CouponDetail: {
    path: '/:id',
    exact: true,
    component: CouponDetail,
    permissions: COUPON_PERMISSIONS.COUPON_VIEW,
  },
};

export default routes;
