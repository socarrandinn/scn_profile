import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

export const reconciliationAdjustmentSchema = Yup.object().shape({
  causeAdjustment: Yup.string()
    .required('required')
    .transform((c) => c?._id || c),
  totalAmount: Yup.number().required('required'),
  providerType: Yup.string()
    .required('required')
    .oneOf([PROVIDER_TYPE_ENUM.CARRIER, PROVIDER_TYPE_ENUM.LOGISTIC, PROVIDER_TYPE_ENUM.SUPPLIER]),
  provider: Yup.string()
    .required('required')
    .transform((p) => p?._id || p),
  description: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  // conciliation: Yup.string().required('required'),
});
