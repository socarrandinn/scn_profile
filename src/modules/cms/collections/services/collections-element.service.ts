import { ICollectionElementRequest } from 'modules/cms/collections/interfaces';
import { CollectionElementCommonService } from './collection-elements-common.service';
import { IBannerCreateElementRequest } from 'modules/cms/banners/interfaces';
import { ApiClientService } from '@dfl/react-security';

const COLLECTION_ELEMENT_PATH = '/ms-cms/api/admin/collections';
/* collection elements product */
class ProductElementsService extends CollectionElementCommonService<ICollectionElementRequest> {}
export const CollectionProductElementsService = new ProductElementsService(`${COLLECTION_ELEMENT_PATH}/products`);

/* collection elements banner */
class BannerElementsService extends CollectionElementCommonService<ICollectionElementRequest> {
  addElementBanner = (payload: IBannerCreateElementRequest): any => {
    const { collection, banner, operation } = payload;
    if (collection && banner) {
      return ApiClientService.post(this.getPath(`/${collection}/elements`), {
        banner,
        operation,
      });
    }

    throw new Error('required collectionId and banner');
  };

  /* adiciona los elementos seleccionados  */
  add = (payload: ICollectionElementRequest): any => {
    const { collectionId, elements, operation } = payload;
    if (collectionId && elements && operation) {
      return ApiClientService.post(this.getPath(`/${collectionId}/elements`), {
        elements,
        operation,
      });
    }

    throw new Error('required collectionId and banner');
  };

  sort = (payload: ICollectionElementRequest): any => {
    const { collectionId, elements } = payload;
    if (collectionId && elements?.length > 0) {
      return ApiClientService.patch(this.getPath(`/${collectionId}/elements/sort`), {
        elements,
      });
    }

    throw new Error('required collectionId and banner');
  };
}
export const CollectionBannerElementsService = new BannerElementsService(`${COLLECTION_ELEMENT_PATH}/banners`);

/* collection elements categories */
class CategoryElementsService extends CollectionElementCommonService<ICollectionElementRequest> {}
export const CollectionCategoryElementsService = new CategoryElementsService(`${COLLECTION_ELEMENT_PATH}/categories`);

/* collection elements testimony */
class TestimonyElementsService extends CollectionElementCommonService<ICollectionElementRequest> {}
export const CollectionTestimonyElementsService = new TestimonyElementsService(
  `${COLLECTION_ELEMENT_PATH}/testimonials`,
);
