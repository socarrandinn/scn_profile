/* inventory */
export enum InventoryProductPermissions {
  PRODUCT_WRITE = 'PRODUCT_WRITE',
  PRODUCT_VIEW = 'PRODUCT_VIEW',
  PRODUCT_PRICE = 'PRODUCT_PRICE',
  PRODUCT_OFFER_WRITE = 'PRODUCT_OFFER_WRITE',
  PRODUCT_OFFER_VIEW = 'PRODUCT_OFFER_VIEW',
  CATEGORY_WRITE = 'CATEGORY_WRITE',
  CATEGORY_VIEW = 'CATEGORY_VIEW',
  TAG_WRITE = 'TAG_WRITE',
  TAG_VIEW = 'TAG_VIEW',
}
export enum InventoryWarehousePermissions {
  WAREHOUSE_WRITE = 'WAREHOUSE_WRITE',
  WAREHOUSE_VIEW = 'WAREHOUSE_VIEW',
  WAREHOUSE_AREA_WRITE = 'WAREHOUSE_AREA_WRITE',
  WAREHOUSE_AREA_VIEW = 'WAREHOUSE_AREA_VIEW',
  WAREHOUSE_SUPPLIER_PROVIDER_WRITE = 'WAREHOUSE_SUPPLIER_PROVIDER_WRITE',
  WAREHOUSE_SUPPLIER_PROVIDER_VIEW = 'WAREHOUSE_SUPPLIER_PROVIDER_VIEW',
}
export enum InventoryStockPermissions {
  STOCK_WRITE = 'STOCK_WRITE',
  STOCK_VIEW = 'STOCK_VIEW',
  STOCK_REDUCTION_CAUSE_WRITE = 'STOCK_REDUCTION_CAUSE_WRITE',
  STOCK_REDUCTION_CAUSE_VIEW = 'STOCK_REDUCTION_CAUSE_VIEW',
}

export enum InventoryDistributionCenterPermissions {
  DISTRIBUTION_CENTER_WRITE = 'DISTRIBUTION_CENTER_WRITE',
  DISTRIBUTION_CENTER_VIEW = 'DISTRIBUTION_CENTER_VIEW',
}

export enum InventoryProvidersPermissions {
  LOGISTIC_PROVIDER_WRITE = 'LOGISTIC_PROVIDER_WRITE',
  LOGISTIC_PROVIDER_VIEW = 'LOGISTIC_PROVIDER_VIEW',
  SUPPLIER_PROVIDER_WRITE = 'SUPPLIER_PROVIDER_WRITE',
  SUPPLIER_PROVIDER_VIEW = 'SUPPLIER_PROVIDER_VIEW',
  MANUFACTURE_WRITE = 'MANUFACTURE_WRITE',
  MANUFACTURE_VIEW = 'MANUFACTURE_VIEW',
}

/* sales section */
export enum SalesOrderPermissions {
  ORDER_WRITE = 'ORDER_WRITE',
  ORDER_VIEW = 'ORDER_VIEW',
}

export enum SalesUnPaidOrderPermissions {
  UNPAID_ORDER_WRITE = 'UNPAID_ORDER_WRITE',
  UNPAID_ORDER_VIEW = 'UNPAID_ORDER_VIEW',
}

export enum SalesSubOrderPermissions {
  SUBORDER_WRITE = 'SUBORDER_WRITE',
  SUBORDER_VIEW = 'SUBORDER_VIEW',
}
export enum SalesShippingPermissions {
  SHIPPING_PLACE_WRITE = 'SHIPPING_PLACE_WRITE',
  SHIPPING_PLACE_VIEW = 'SHIPPING_PLACE_VIEW',
  SHIPPING_HOME_WRITE = 'SHIPPING_HOME_WRITE',
  SHIPPING_HOME_VIEW = 'SHIPPING_HOME_VIEW',
}
export enum SalesStatusPermissions {
  ORDER_STATUS_WRITE = 'ORDER_STATUS_WRITE',
  ORDER_STATUS_VIEW = 'ORDER_STATUS_VIEW',
}
export enum SalesCauseIncidencePermissions {
  CAUSES_INCIDENCE_WRITE = 'CAUSES_INCIDENCE_WRITE',
  CAUSES_INCIDENCE_VIEW = 'CAUSES_INCIDENCE_VIEW',
}
export enum SalesOfferPermissions {
  COUPON_WRITE = 'COUPON_WRITE',
  COUPON_VIEW = 'COUPON_VIEW',
  OFFER_ORDER_WRITE = 'OFFER_ORDER_WRITE',
  OFFER_ORDER_VIEW = 'OFFER_ORDER_VIEW',
}

/* clients section */

export enum ClientUsersPermissions {
  CLIENTS_WRITE = 'CLIENTS_WRITE',
  CLIENTS_VIEW = 'CLIENTS_VIEW',
  REVIEW = 'REVIEW',
}
export enum ClientReviewPermissions {
  REVIEWS_WRITE = 'REVIEWS_WRITE',
  REVIEWS_VIEW = 'REVIEWS_VIEW',
}
export enum ClientReportCausePermissions {
  REPORT_CAUSE_WRITE = 'REPORT_CAUSE_WRITE',
  REPORT_CAUSE_VIEW = 'REPORT_CAUSE_VIEW',
}
export enum ClientDisallowedWordPermissions {
  DISALLOWED_WORD_WRITE = 'DISALLOWED_WORD_WRITE',
  DISALLOWED_WORD_VIEW = 'DISALLOWED_WORD_VIEW',
}

/* security section */
export enum SecurityRolePermissions {
  ROLE_WRITE = 'ROLE_WRITE',
  ROLE_VIEW = 'ROLE_VIEW',
  ROLES_ASSIGN = 'ROLES_ASSIGN',

  ROLE_PROVIDER_WRITE = 'ROLE_PROVIDER_WRITE',
  ROLE_PROVIDER_VIEW = 'ROLE_PROVIDER_VIEW',
  ROLES_PROVIDER_ASSIGN = 'ROLES_PROVIDER_ASSIGN',
}

export enum SecurityUserPermissions {
  ADMIN = 'ADMIN',
  USER_WRITE = 'USER_WRITE',
  USER_VIEW = 'USER_VIEW',
  USER_INVITE_WRITE = 'USER_INVITE_WRITE',
  USER_INVITE_VIEW = 'USER_INVITE_VIEW',
  PROVIDER_USER_WRITE = 'PROVIDER_USER_WRITE',
  PROVIDER_USER_VIEW = 'PROVIDER_USER_VIEW',
  // USER = 'USER',
  // SPACE_VIEW = 'SPACE_VIEW',
  // SPACE_WRITE = 'SPACE_WRITE',
}

/* content section */

export enum ContentCollectionPermissions {
  COLLECTIONS_WRITE = 'COLLECTIONS_WRITE',
  COLLECTIONS_VIEW = 'COLLECTIONS_VIEW',
}
export enum ContentBannerPermissions {
  BANNERS_WRITE = 'BANNERS_WRITE',
  BANNERS_VIEW = 'BANNERS_VIEW',
}
export enum ContentContentPermissions {
  COLLECTIONS_WRITE = 'COLLECTIONS_WRITE',
  COLLECTIONS_VIEW = 'COLLECTIONS_VIEW',
}
export enum ContentMediaPermissions {
  MEDIA_WRITE = 'MEDIA_WRITE',
  MEDIA_VIEW = 'MEDIA_VIEW',
}
export enum ContentNavigationPermissions {
  NAVIGATION_WRITE = 'NAVIGATION_WRITE',
  NAVIGATION_VIEW = 'NAVIGATION_VIEW',
}
export enum ContentTestimonialPermissions {
  TESTIMONY_WRITE = 'TESTIMONY_WRITE',
  TESTIMONY_VIEW = 'TESTIMONY_VIEW',
}

/* reports section */
export enum ReportPermissions {
  ANALYTICS_WRITE = 'ANALYTICS_WRITE',
  ANALYTICS_VIEW = 'ANALYTICS_VIEW',

  // ANALYTICS_USER = 'ANALYTICS_USER',
  ROLE_REPORT = 'ROLE_REPORT',
  ROLE_PROVIDER_REPORT = 'ROLE_PROVIDER_REPORT',
  // ANALYTICS_USER = 'ANALYTICS_USER',
  PRODUCT_ANALYTICS = 'PRODUCT_ANALYTICS',
  USER_ANALYTICS = 'USER_ANALYTICS',
}
