export const keysToExclude = [
  '_id',
  'id',
  // 'seo',
  // 'keywords',
  'related',
  // 'media',
  '__v',
  'space',
  'secureSpacePath',
  'url'
];

export const keysToSummaryExclude = [
  // 'productProvider'
];

export const keysToPriceInclude = ['payload', 'after', 'before', 'costPrice', 'finalPrice', 'lastPrice', 'price'];

export const keysToOfferInclude = [
  'payload',
  'after',
  'offer',
  'before',
  'discount',
  'expiration',
  'startDate',
  'discountType',
  'enabled',
];
