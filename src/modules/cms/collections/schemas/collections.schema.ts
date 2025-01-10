import * as Yup from 'yup';
import '@dfl/yup-validations';
import { COLLECTION_BANNER_TYPE, COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

export const collectionsSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().required('required').min(4, 'min-4'),
  contentType: Yup.string().required('required').oneOf(Object.keys(COLLECTION_CONTENT_TYPE)),
  bannerType: Yup.string().when(['contentType'], {
    is: (contentType: COLLECTION_CONTENT_TYPE) => contentType === COLLECTION_CONTENT_TYPE.BANNER,
    then: (scheme) => scheme.required('required').oneOf(Object.keys(COLLECTION_BANNER_TYPE)),
  }),
});
