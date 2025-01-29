import * as Yup from 'yup';
import '@dfl/yup-validations';
import {
  COLLECTION_BANNER_TYPE,
  COLLECTION_BANNERS_POSITION,
  COLLECTION_CONTENT_TYPE,
  COLLECTION_PRODUCTS_POSITION,
  DYNAMIC_COLLECTION_TYPE,
} from '../constants/collection-types';

export const collectionsSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().required('required').min(4, 'min-4'),
  contentType: Yup.string().required('required').oneOf(Object.keys(COLLECTION_CONTENT_TYPE)),
  subType: Yup.string().when(['contentType'], {
    is: (contentType: COLLECTION_CONTENT_TYPE) => contentType === COLLECTION_CONTENT_TYPE.BANNER,
    then: (scheme) => scheme.required('required').oneOf(Object.keys(COLLECTION_BANNER_TYPE)),
    otherwise: (scheme) => scheme.strip(),
  }),
  isDynamic: Yup.boolean()
    .default(false)
    .when(['contentType'], {
      is: (contentType: COLLECTION_CONTENT_TYPE) =>
        [COLLECTION_CONTENT_TYPE.CATEGORY, COLLECTION_CONTENT_TYPE.PRODUCT].includes(contentType),
      then: (scheme) => scheme.required('required'),
      otherwise: (scheme) => scheme.strip(),
    }),
  position: Yup.string().when(['contentType'], {
    is: (contentType: COLLECTION_CONTENT_TYPE) =>
      [COLLECTION_CONTENT_TYPE.BANNER, COLLECTION_CONTENT_TYPE.PRODUCT].includes(contentType),
    then: (scheme) =>
      scheme
        .required('required')
        .oneOf([...Object.keys(COLLECTION_BANNERS_POSITION), ...Object.keys(COLLECTION_PRODUCTS_POSITION)]),
    otherwise: (scheme) => scheme.strip(),
  }),
  dynamic: Yup.string().when(['contentType', 'isDynamic'], {
    is: (contentType: COLLECTION_CONTENT_TYPE, isDynamic: boolean) =>
      [COLLECTION_CONTENT_TYPE.CATEGORY, COLLECTION_CONTENT_TYPE.PRODUCT].includes(contentType) && isDynamic,
    then: (scheme) => scheme.required('required').oneOf([...Object.keys(DYNAMIC_COLLECTION_TYPE)]),
    otherwise: (scheme) => scheme.strip(),
  }),
});

export const collectionsElementAddSchema = Yup.object().shape({
  elements: Yup.array().required('required').min(1, 'errors:min-1'),
  // .transform((elements) => elements?.map((element: any) => element?._id)),
});
