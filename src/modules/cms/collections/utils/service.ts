import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import {
  CollectionBannerService,
  CollectionProductService,
  CollectionTestimonyService,
  CollectionCategoryService,
  CollectionProductElementsService,
  CollectionBannerElementsService,
  CollectionCategoryElementsService,
  CollectionTestimonyElementsService,
} from '../services';

type CollectionProps =
  | typeof CollectionProductService
  | typeof CollectionBannerService
  | typeof CollectionTestimonyService
  | typeof CollectionCategoryService;

export const CollectionService: Record<COLLECTION_CONTENT_TYPE, CollectionProps> = {
  [COLLECTION_CONTENT_TYPE.PRODUCT]: CollectionProductService,
  [COLLECTION_CONTENT_TYPE.BANNER]: CollectionBannerService,
  [COLLECTION_CONTENT_TYPE.CATEGORY]: CollectionCategoryService,
  [COLLECTION_CONTENT_TYPE.TESTIMONY]: CollectionTestimonyService,
};

/* elements */
type ElementProps =
  | typeof CollectionProductElementsService
  | typeof CollectionBannerElementsService
  | typeof CollectionCategoryElementsService
  | typeof CollectionTestimonyElementsService;

export const CollectionElementService: Record<COLLECTION_CONTENT_TYPE, ElementProps> = {
  [COLLECTION_CONTENT_TYPE.PRODUCT]: CollectionProductElementsService,
  [COLLECTION_CONTENT_TYPE.BANNER]: CollectionBannerElementsService,
  [COLLECTION_CONTENT_TYPE.CATEGORY]: CollectionCategoryElementsService,
  [COLLECTION_CONTENT_TYPE.TESTIMONY]: CollectionTestimonyElementsService,
};
