import * as Yup from 'yup';
import '@dfl/yup-validations';

export const paymentAgreementSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  driver: Yup.string()
    .required('required')
    .transform((d) => d?._id || d),

  shippingCost: Yup.number().positive('positiveNumber').required('required'),
  estimatedShippingCost: Yup.number().default(0),
  sendDate: Yup.date().required('required'),
  filters: Yup.object(),
});

export const updatePaymentAgreementSchema = Yup.object().shape({
  dispatch: Yup.string()
    .required('required')
    .transform((d) => d?._id || d),
});
