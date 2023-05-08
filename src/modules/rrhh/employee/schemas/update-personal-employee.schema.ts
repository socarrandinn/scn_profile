import * as Yup from 'yup';
import { EmployeeContactInfoSchema } from 'modules/rrhh/employee/schemas/contact-info.schema';
import { EmployeeGeneralInfoSchema } from 'modules/rrhh/employee/schemas/general-info.schema';
import { EmployeeAddressInfoSchema } from 'modules/rrhh/employee/schemas/address-info.schema';

export const UpdatePersonalEmployeeSchema = Yup.object().shape({
  general: EmployeeGeneralInfoSchema,
  address: EmployeeAddressInfoSchema,
  contacts: EmployeeContactInfoSchema,
});
