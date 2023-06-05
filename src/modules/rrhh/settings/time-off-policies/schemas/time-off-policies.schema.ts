import * as Yup from 'yup';
import '@dfl/yup-validations';

export const timeOffPoliciesSchema = Yup.object().shape({
  name: Yup.string().required('required').min(2, 'min-2').max(255, 'max-255'),
  icon: Yup.string().required('required').min(2, 'min-2').max(255, 'max-255'),
  description: Yup.string().nullable(),
  type: Yup.string().required('required'),
  isPaid: Yup.boolean().nullable(),
  needApproval: Yup.boolean().nullable(),
  coverAmount: Yup.string().nullable(),
  accumulate: Yup.object().shape({
    isAccumulative: Yup.boolean().nullable(),
    value: Yup.number().when('isAccumulative', {
      is: true,
      then: (schema) => schema.required('required').min(0.001, 'min-0001-num'),
      otherwise: (schema) => schema.nullable(),
    }),
    interval: Yup.string().when('isAccumulative', {
      is: true,
      then: (schema) => schema.required('required'),
      otherwise: (schema) => schema.nullable(),
    }),
  }),
  rules: Yup.object().shape({
    limitTimeRule: Yup.object().shape({
      value: Yup.number().required('required'),
      valueInterval: Yup.string().required('required'),
    }),
    startApplyRuler: Yup.object().shape({
      value: Yup.number().required('required'),
      valueInterval: Yup.string().required('required'),
    }),
  }),
});
