import * as Yup from 'yup';
import '@dfl/yup-validations';

export const employeeIdSchema = Yup.object().shape({
  employees: Yup.array().required('required').min(1, 'users:min-1'),
});

export const employeeSchema = Yup.object().shape({
  // title: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  // description: Yup.string().required('required').min(4, 'min-4'),
});
