import * as Yup from 'yup';
import { CompensationType, PaymentType, Frequency } from 'modules/rrhh/employee/management/constants/compensation';

export const CompensationInfoSchema = Yup.object().shape({
  type: Yup.mixed().oneOf(Object.values(CompensationType)).required('required'),
  paymentType: Yup.mixed().oneOf(Object.values(PaymentType)).required('required'),
  value: Yup.number().required('required').min(1, 'min-1-num'),
  frequency: Yup.mixed().oneOf(Object.values(Frequency)).required('required'),
  notes: Yup.string().nullable().max(255, 'max-255'),
});
