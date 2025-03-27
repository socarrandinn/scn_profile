import * as Yup from 'yup';
import '@dfl/yup-validations';

export const paymentAgreementCommonSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  driver: Yup.string()
    .required('required')
    .transform((d) => d?._id || d),

  shippingCost: Yup.number().positive('positiveNumber').required('required'),
  estimatedShippingCost: Yup.number().default(0.0),
  maxShippingCost: Yup.number().default(0.0),
  sendDate: Yup.date().required('required'),
});

export const paymentAgreementSchema = Yup.object()
  .shape({
    filters: Yup.object(),
  })
  .concat(paymentAgreementCommonSchema);

export const updatePaymentAgreementSchema = Yup.object().shape({
  paymentAgreementId: Yup.string()
    .required('required')
    .transform((d) => d?._id || d),
});
