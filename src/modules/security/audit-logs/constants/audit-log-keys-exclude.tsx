export const keysToExclude = [
  '_id',
  'id',
  'priceMedatada',
  'rating',
  'seo',
  'deletedAt',
  'secureSpacePath',
  'categoryPath',
  'keywords',
  'related',
  'media',
  '__v',
  'stories',
  'updatedAt',
  'space',
  'place',
  'permissions',
  'via',
  'stores',
  'storeCategories',
  'image',
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
