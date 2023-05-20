import * as Yup from 'yup';
import '@dfl/yup-validations';

export const EmployeeAddressInfoSchema = Yup.object().shape({
  address: Yup.string().required('required'),
  municipality: Yup.string().required('required'),
  state: Yup.string().required('required'),
  // country: Yup.string().required('required'),
  zipCode: Yup.string().required('required'),
});
