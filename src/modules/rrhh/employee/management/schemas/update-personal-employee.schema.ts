import * as Yup from 'yup';
import { EmployeeContactInfoSchema } from 'modules/rrhh/employee/management/schemas/contact-info.schema';
import { EmployeeGeneralInfoSchema } from 'modules/rrhh/employee/management/schemas/general-info.schema';
import { EmployeeAddressInfoSchema } from 'modules/rrhh/employee/management/schemas/address-info.schema';

export const UpdatePersonalEmployeeSchema = Yup.object().shape({
  general: EmployeeGeneralInfoSchema,
  address: EmployeeAddressInfoSchema,
  contacts: EmployeeContactInfoSchema,
});
