import * as Yup from 'yup';
import '@dfl/yup-validations';
import { TAG_PROVIDER_ENUM, TAG_TYPE_ENUM } from '../interfaces';

export const tagsSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  type: Yup.string().oneOf(Object.keys(TAG_TYPE_ENUM)).required('required'),
  isRequiredForProducts: Yup.boolean().default(false),
  isRequiredForProviders: Yup.array(Yup.string().oneOf(Object.keys(TAG_PROVIDER_ENUM))),
  isMultiValue: Yup.boolean().when(['type'], {
    is: TAG_TYPE_ENUM.ARRAY,
    then: (schema) => schema.transform((_v) => true),
  }),
  values: Yup.array()
    .of(Yup.string())
    .when(['type'], {
      is: TAG_TYPE_ENUM.ARRAY,
      then: (schema) => schema.min(1, 'min-1'),
    }),
});
