import { ICollectionElement } from 'modules/cms/collections/interfaces';
import { CollectionElementCommonService } from './collection-elements-common.service';

const COLLECTION_ELEMENT_PATH = '/ms-cms/api/admin/collections';
/* collection elements product */
class ProductElementsService extends CollectionElementCommonService<ICollectionElement> {}
export const CollectionProductElementsService = new ProductElementsService(`${COLLECTION_ELEMENT_PATH}/products`);

/* collection elements banner */
class BannerElementsService extends CollectionElementCommonService<ICollectionElement> {}
export const CollectionBannerElementsService = new BannerElementsService(`${COLLECTION_ELEMENT_PATH}/banners`);

/* collection elements categories */
class CategoryElementsService extends CollectionElementCommonService<ICollectionElement> {}
export const CollectionCategoryElementsService = new CategoryElementsService(`${COLLECTION_ELEMENT_PATH}/categories`);

/* collection elements testimony */
class TestimonyElementsService extends CollectionElementCommonService<ICollectionElement> {}
export const CollectionTestimonyElementsService = new TestimonyElementsService(
  `${COLLECTION_ELEMENT_PATH}/testimonials`,
);
