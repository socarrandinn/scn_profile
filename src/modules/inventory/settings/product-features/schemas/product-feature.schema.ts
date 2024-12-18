import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PRODUCT_FEATURE_TYPE_ENUM } from '../interfaces/IProductFeature';

export const productFeatureSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  type: Yup.string().oneOf(Object.keys(PRODUCT_FEATURE_TYPE_ENUM)).required('required'),
  isMultiValue: Yup.boolean().default(false),
  values: Yup.array()
    .of(Yup.string())
    .when(['type'], {
      is: (type: PRODUCT_FEATURE_TYPE_ENUM) =>
        [PRODUCT_FEATURE_TYPE_ENUM.ARRAY, PRODUCT_FEATURE_TYPE_ENUM.COLOR].includes(type),
      then: (schema) => schema.min(1, 'min-1'),
    }),
});
