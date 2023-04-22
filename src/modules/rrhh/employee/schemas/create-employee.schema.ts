import * as Yup from 'yup';
import { EmployeeContactInfoSchema } from 'modules/rrhh/employee/schemas/contact-info.schema';
import { HiringInfoSchema } from 'modules/rrhh/employee/schemas/hiring.schema';

export const CreateEmployeeSchema = Yup.object().shape({
  contacts: EmployeeContactInfoSchema,
  hiring: HiringInfoSchema,
  hasUser: Yup.boolean().required('required'),
});
