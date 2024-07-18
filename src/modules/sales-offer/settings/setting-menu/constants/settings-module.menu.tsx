import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { DISCOUNT_COUPONS, OFFERS_TO_CLIENT, OFFER_ORDER, PRODUCT_DISCOUNTS } from './offer.entities.styles';

export const offerManagementMenu: IMenuItemPage[] = [
  {
    title: 'offers:product_discounts:title',
    description: 'offers:product_discounts:description',
    path: '/sales/offers/settings/product_discounts',
    icon: PRODUCT_DISCOUNTS.ICON,
    color: PRODUCT_DISCOUNTS.COLOR,
    // permissions: [CAUSES_INCIDENCE_PERMISSIONS.CAUSES_INCIDENCE_VIEW],
  },
  {
    title: 'offers:offer_orders:title',
    description: 'offers:offer_orders:description',
    path: '/sales/offers/settings/offer_orders',
    icon: OFFER_ORDER.ICON,
    color: OFFER_ORDER.COLOR,
    // permissions: [CAUSES_INCIDENCE_PERMISSIONS.CAUSES_INCIDENCE_VIEW],
  },

  {
    title: 'offers:discount_coupons:title',
    description: 'offers:discount_coupons:description',
    path: '/sales/offers/settings/coupons',
    icon: DISCOUNT_COUPONS.ICON,
    color: DISCOUNT_COUPONS.COLOR,
    // permissions: [CAUSES_INCIDENCE_PERMISSIONS.CAUSES_INCIDENCE_VIEW],
  },

  {
    title: 'offers:offers_to_clients:title',
    description: 'offers:offers_to_clients:description',
    path: '/sales/offers/settings/offers_to_clients',
    icon: OFFERS_TO_CLIENT.ICON,
    color: OFFERS_TO_CLIENT.COLOR,
    // permissions: [CAUSES_INCIDENCE_PERMISSIONS.CAUSES_INCIDENCE_VIEW],
  },
];
