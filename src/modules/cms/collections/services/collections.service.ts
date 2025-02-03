import { ICollection } from 'modules/cms/collections/interfaces';
import { CollectionCommonService } from './collection-common.service';

const COLLECTION_PATH = '/ms-cms/api/admin/collections';

/* product collection */
class ProductService extends CollectionCommonService<ICollection> {}
export const CollectionProductService = new ProductService(`${COLLECTION_PATH}/products`);

/* product collection */
class BannerService extends CollectionCommonService<ICollection> {}
export const CollectionBannerService = new BannerService(`${COLLECTION_PATH}/banners`);

/* product collection */
class CategoryService extends CollectionCommonService<ICollection> {}
export const CollectionCategoryService = new CategoryService(`${COLLECTION_PATH}/categories`);

/* product collection */
class TestimonyService extends CollectionCommonService<ICollection> {}
export const CollectionTestimonyService = new TestimonyService(`${COLLECTION_PATH}/testimonials`);
