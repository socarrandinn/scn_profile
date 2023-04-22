import * as Yup from 'yup';
import { EmployeeContactInfoSchema } from 'modules/rrhh/employee/schemas/contact-info.schema';

export const CreateEmployeeSchema = Yup.object().shape({
  // general:
  // address:
  contacts: EmployeeContactInfoSchema,
  hasUser: Yup.boolean().required('required'),
});
