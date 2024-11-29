import * as Yup from 'yup';
import '@dfl/yup-validations';
import { TAG_TYPE_ENUM } from '../interfaces';

// schema rules
const ruleSchema = Yup.object().shape({
  required: Yup.boolean().default(false),
});

export const tagsRulesSchema = Yup.object().shape({
  product: ruleSchema,
  supplier: ruleSchema,
  logistic: ruleSchema,
});

export const tagsSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  type: Yup.string().oneOf(Object.keys(TAG_TYPE_ENUM)).required('required'),
  isMultiValue: Yup.boolean().default(false),
  values: Yup.array()
    .of(Yup.string())
    .when(['type'], {
      is: TAG_TYPE_ENUM.ARRAY,
      then: (schema) => schema.min(1, 'min-1'),
    }),

  rules: tagsRulesSchema,
});
