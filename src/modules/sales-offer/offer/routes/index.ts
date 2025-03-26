import { OfferList, OfferCreate, OfferDetails } from 'modules/sales-offer/offer/pages';
import { RouteConfig } from '@dfl/react-security';
import { OFFER_PERMISSIONS } from 'modules/sales-offer/offer/constants/offer.permissions';

const routes: RouteConfig = {
  OfferList: {
    path: '/',
    permissions: OFFER_PERMISSIONS.OFFER_VIEW,
    component: OfferList,
  },

  OfferCreate: {
    path: '/create',
    component: OfferCreate,
    permissions: OFFER_PERMISSIONS.OFFER_VIEW,
  },

  OfferDetails: {
    path: '/:id',
    exact: true,
    component: OfferDetails,
    permissions: OFFER_PERMISSIONS.OFFER_VIEW,
  },
};

export default routes;
