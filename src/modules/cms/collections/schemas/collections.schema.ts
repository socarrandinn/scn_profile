import * as Yup from 'yup';
import '@dfl/yup-validations';
import { COLLECTION_BANNER_TYPE, COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

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
});

export const collectionsElementAddSchema = Yup.object().shape({
  elements: Yup.array()
    .required('required')
    .min(1, 'errors:min-1')
    // .transform((elements) => elements?.map((element: any) => element?._id)),
});
