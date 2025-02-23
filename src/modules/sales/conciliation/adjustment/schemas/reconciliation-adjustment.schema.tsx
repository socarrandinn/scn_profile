import * as Yup from 'yup';
import '@dfl/yup-validations';

export const reconciliationAdjustmentSchema = Yup.object().shape({
  adjustment: Yup.object().shape({
    type: Yup.string().required('required').oneOf(['ADDED', 'DISCOUNT']),
    value: Yup.number().required('required').moreThan(0, 'invalidValue-number').typeError('invalidValue-number'),
  }),
  provider: Yup.object().shape({
    id: Yup.string()
      .required('required')
      .transform((el) => el._id || el),
    type: Yup.string().required('required').oneOf(['PRODUCT', 'LOGISTIC', 'CARRIER']),
  }),
  description: Yup.string().required('required'),
});
