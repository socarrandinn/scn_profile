import { ICollectionElement } from 'modules/cms/collections/interfaces';
import { CollectionElementCommonService } from './collection-elements-common.service';
import { IBannerCollectionCreate } from 'modules/cms/banners/interfaces';
import { ApiClientService } from '@dfl/react-security';

const COLLECTION_ELEMENT_PATH = '/ms-cms/api/admin/collections';
/* collection elements product */
class ProductElementsService extends CollectionElementCommonService<ICollectionElement> {}
export const CollectionProductElementsService = new ProductElementsService(`${COLLECTION_ELEMENT_PATH}/products`);

/* collection elements banner */
class BannerElementsService extends CollectionElementCommonService<ICollectionElement> {
  addElementBanner = (payload: IBannerCollectionCreate): any => {
    const { collection, banner, operation } = payload;
    if (collection && banner) {
      return ApiClientService.post(this.getPath(`/${payload?.collection}/elements`), {
        banner,
        operation,
      });
    }

    throw new Error('required collectionId and banner');
  };
}
export const CollectionBannerElementsService = new BannerElementsService(`${COLLECTION_ELEMENT_PATH}/banners`);

/* collection elements categories */
class CategoryElementsService extends CollectionElementCommonService<ICollectionElement> {}
export const CollectionCategoryElementsService = new CategoryElementsService(`${COLLECTION_ELEMENT_PATH}/categories`);

/* collection elements testimony */
class TestimonyElementsService extends CollectionElementCommonService<ICollectionElement> {}
export const CollectionTestimonyElementsService = new TestimonyElementsService(
  `${COLLECTION_ELEMENT_PATH}/testimonials`,
);
