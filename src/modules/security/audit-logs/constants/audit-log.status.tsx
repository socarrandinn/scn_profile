export enum AUDIT_LOG_MODULE_ENUM {
  SUPPLIER = 'SUPPLIER',
  PRODUCT = 'PRODUCT',
  'LOGISTIC-PROVIDER' = 'LOGISTIC-PROVIDER',
  // MANUFACTURE = 'MANUFACTURE',
  STORE = 'STORE',
  CATEGORY = 'CATEGORY',
  SEO_ROBOT_MODULE = 'SEO_ROBOT_MODULE',
  SEO_STATIC_PAGES_MODULE = 'SEO_STATIC_PAGES_MODULE',
  ROLE = 'ROLE',
  ROLE_PROVIDER = 'ROLE_PROVIDER',
  STOCK_REDUCTION_CAUSE = 'STOCK_REDUCTION_CAUSE',
  WAREHOUSE_AREA = 'WAREHOUSE_AREA',
  COUPON = 'COUPON',
  OFFER_ORDER = 'OFFER_ORDER',
  OFFER = 'OFFER',
  REVIEWS = 'REVIEWS',
  USER_INVITE = 'USER_INVITE',
  PRODUCT_OFFER = 'PRODUCT_OFFER',
  MANUFACTURE = 'MANUFACTURE',
  WAREHOUSE_SUPPLIER = 'WAREHOUSE_SUPPLIER',
}

export const AUDIT_LOG_MODULE_COLOR: { [key in AUDIT_LOG_MODULE_ENUM]: string } = {
  [AUDIT_LOG_MODULE_ENUM.SUPPLIER]: '#37adff',
  [AUDIT_LOG_MODULE_ENUM.SEO_ROBOT_MODULE]: '#474fbf',
  [AUDIT_LOG_MODULE_ENUM.SEO_STATIC_PAGES_MODULE]: '#1aa0d9',
  [AUDIT_LOG_MODULE_ENUM.ROLE]: '#D32F2F',
  [AUDIT_LOG_MODULE_ENUM.PRODUCT]: '#116F34',
  [AUDIT_LOG_MODULE_ENUM.STORE]: '#65be46',
  [AUDIT_LOG_MODULE_ENUM.WAREHOUSE_AREA]: '#02b389',
  [AUDIT_LOG_MODULE_ENUM['LOGISTIC-PROVIDER']]: '#37adff',
  // [AUDIT_LOG_MODULE_ENUM.MANUFACTURE]: '#fda20a',
  [AUDIT_LOG_MODULE_ENUM.CATEGORY]: '#ec6b01',
  [AUDIT_LOG_MODULE_ENUM.STOCK_REDUCTION_CAUSE]: '#0e2393',
  [AUDIT_LOG_MODULE_ENUM.ROLE_PROVIDER]: '#D32F2F',
  [AUDIT_LOG_MODULE_ENUM.COUPON]: '#ed6d0c',
  [AUDIT_LOG_MODULE_ENUM.OFFER_ORDER]: '#d15cc1',
  [AUDIT_LOG_MODULE_ENUM.OFFER]: '#d15cf2',
  [AUDIT_LOG_MODULE_ENUM.REVIEWS]: '#1976d2',
  [AUDIT_LOG_MODULE_ENUM.USER_INVITE]: '#455A64',
  [AUDIT_LOG_MODULE_ENUM.PRODUCT_OFFER]: '#FF4500',
  [AUDIT_LOG_MODULE_ENUM.MANUFACTURE]: '#fda20a',
  [AUDIT_LOG_MODULE_ENUM.WAREHOUSE_SUPPLIER]: '#FDA20A',
};

export const AUDIT_LOG_MODULE_TEXT: { [key in AUDIT_LOG_MODULE_ENUM]: string } = {
  [AUDIT_LOG_MODULE_ENUM.SUPPLIER]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.SEO_ROBOT_MODULE]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.SEO_STATIC_PAGES_MODULE]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.ROLE]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.PRODUCT]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.STORE]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM['LOGISTIC-PROVIDER']]: '#FFF',
  // [AUDIT_LOG_MODULE_ENUM.MANUFACTURE]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.CATEGORY]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.STOCK_REDUCTION_CAUSE]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.WAREHOUSE_AREA]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.ROLE_PROVIDER]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.COUPON]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.OFFER_ORDER]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.OFFER]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.REVIEWS]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.USER_INVITE]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.PRODUCT_OFFER]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.MANUFACTURE]: '#FFF',
  [AUDIT_LOG_MODULE_ENUM.WAREHOUSE_SUPPLIER]: '#FFF',
};

export enum AUDIT_LOG_EVENT_ENUM {
  UPDATE = 'UPDATE',
  CREATE = 'CREATE',
  REMOVE = 'REMOVE',
  RESTORE = 'RESTORE',
  REMOVE_MANY = 'REMOVE_MANY',
  UPLOAD_FILE = 'UPLOAD_FILE',
  DELETED = 'DELETED',

  UPDATE_SHIPPING_INFO = 'UPDATE_SHIPPING_INFO',
  UPDATE_SHIPPING_TIME = 'UPDATE_SHIPPING_TIME',
  UPDATE_SCORE = 'UPDATE_SCORE',
  UPDATE_RULES = 'UPDATE_RULES',
  UPDATE_MEDIA = 'UPDATE_MEDIA',
  UPDATE_SEO = 'UPDATE_SEO',
  UPDATE_PROVIDER = 'UPDATE_PROVIDER',
  UPDATE_LOCATION = 'UPDATE_LOCATION',
  UPDATE_ADDRESS = 'UPDATE_ADDRESS',
  UPDATE_CONTACTS = 'UPDATE_CONTACTS',
  UPDATE_LOGISTIC = 'UPDATE_LOGISTIC',
  UPDATE_WAREHOUSE = 'UPDATE_WAREHOUSE',
  UPDATE_TAGS = 'UPDATE_TAGS',

  // system
  UPDATE_ROLE_PROVIDER = 'UPDATE_ROLE_PROVIDER',
  UPDATE_PERMISSIONS = 'UPDATE_PERMISSIONS',
  ADD_USER_ROLE_PROVIDER = 'ADD_USER_ROLE_PROVIDER',
  CREATE_ROLE_PROVIDER = 'CREATE_ROLE_PROVIDER',
  UPDATE_USER = 'UPDATE_USER',
  DELETE_USER = 'DELETE_USER',
  UPDATE_VISIBILITY = 'UPDATE_VISIBILITY',

  // product
  UPDATE_PRICE_DETAILS = 'UPDATE_PRICE_DETAILS',
  UPDATE_FEATURE = 'UPDATE_FEATURE',
  UPDATE_PRICE = 'UPDATE_PRICE',
}

export const AUDIT_LOG_EVENT_COLOR: { [key in AUDIT_LOG_EVENT_ENUM]: string } = {
  [AUDIT_LOG_EVENT_ENUM.UPDATE]: '#116F34',
  [AUDIT_LOG_EVENT_ENUM.CREATE]: '#1976D2',
  [AUDIT_LOG_EVENT_ENUM.REMOVE]: '#D32F2F',
  [AUDIT_LOG_EVENT_ENUM.RESTORE]: '#fcc40a',
  [AUDIT_LOG_EVENT_ENUM.REMOVE_MANY]: '#D32F2F',
  [AUDIT_LOG_EVENT_ENUM.UPLOAD_FILE]: '#004D66',
  [AUDIT_LOG_EVENT_ENUM.DELETED]: '#D32F2F',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_SHIPPING_INFO]: '#7B1FA2',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_SHIPPING_TIME]: '#5D4037',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_SCORE]: '#C2185B',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_RULES]: '#455A64',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_MEDIA]: '#06738C',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_SEO]: '#28A540',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_PROVIDER]: '#3E12AB',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_LOCATION]: '#5D4037',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_ADDRESS]: '#C2185B',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_CONTACTS]: '#455A64',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_LOGISTIC]: '#06738C',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_WAREHOUSE]: '#28A540',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_TAGS]: '#22B4A7',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_FEATURE]: '#22B474',
  // system
  [AUDIT_LOG_EVENT_ENUM.UPDATE_ROLE_PROVIDER]: '#D32F2F',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_PERMISSIONS]: '#D32F2F',
  [AUDIT_LOG_EVENT_ENUM.ADD_USER_ROLE_PROVIDER]: '#28A540',
  [AUDIT_LOG_EVENT_ENUM.CREATE_ROLE_PROVIDER]: '#1976D2',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_USER]: '#116F34',
  [AUDIT_LOG_EVENT_ENUM.DELETE_USER]: '#D32F2F',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_VISIBILITY]: '#357a38',

  // product
  [AUDIT_LOG_EVENT_ENUM.UPDATE_PRICE_DETAILS]: '#D32F2F',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_PRICE]: '#D32F2F',
};

export const AUDIT_LOG_COLORS_TEXT: { [key in AUDIT_LOG_EVENT_ENUM]: string } = {
  [AUDIT_LOG_EVENT_ENUM.UPDATE]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.CREATE]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.REMOVE]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.RESTORE]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.REMOVE_MANY]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPLOAD_FILE]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.DELETED]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_SHIPPING_INFO]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_SHIPPING_TIME]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_SCORE]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_RULES]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_MEDIA]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_SEO]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_PROVIDER]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_LOCATION]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_ADDRESS]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_CONTACTS]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_LOGISTIC]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_WAREHOUSE]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_TAGS]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_FEATURE]: '#FFF',
  // system
  [AUDIT_LOG_EVENT_ENUM.UPDATE_ROLE_PROVIDER]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_PERMISSIONS]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.ADD_USER_ROLE_PROVIDER]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.CREATE_ROLE_PROVIDER]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_USER]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.DELETE_USER]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_VISIBILITY]: '#FFF',

  // product
  [AUDIT_LOG_EVENT_ENUM.UPDATE_PRICE_DETAILS]: '#FFF',
  [AUDIT_LOG_EVENT_ENUM.UPDATE_PRICE]: '#FFF',
};
