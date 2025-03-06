import * as Yup from 'yup';
import '@dfl/yup-validations';
import { ORDER_STATUS_TYPE_ENUM, ORDER_STATUS_VALIDATE_TYPE } from '../constants';

export const orderStatusSchema = Yup.object().shape({
  title: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string(),
  order: Yup.number().typeError('invalidValue-number').required('required').min(0, 'min-0'),
  tracking: Yup.boolean().required('required'),
  allowTo: Yup.array().of(Yup.string()).required('required'),
  type: Yup.string(),
  validationType: Yup.string().when(['type'], {
    is: (type: ORDER_STATUS_TYPE_ENUM) => type === ORDER_STATUS_TYPE_ENUM.VALIDATED,
    then: (schema) => schema.oneOf(Object.keys(ORDER_STATUS_VALIDATE_TYPE)).required('required'),
    otherwise: (scheme) => scheme.strip(),
  }),

  notification: Yup.object({
    enabled: Yup.boolean(),
    audience: Yup.array()
      .when('enabled', {
        is: true,
        then: (schema) =>
          schema.of(
            Yup.object({
              target: Yup.array().of(Yup.string()).required('required').min(1, 'min-1-item'),
              template: Yup.string().required('required').min(2, 'min-2').max(255, 'max-255'),
            }),
          ),
      })
      .required('required'),
  }),
});
