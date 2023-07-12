import * as Yup from 'yup';
import { EmployeeContactInfoSchema } from 'modules/store/employee/management/schemas/contact-info.schema';
import { EmployeeGeneralInfoSchema } from 'modules/store/employee/management/schemas/general-info.schema';
import { EmployeeAddressInfoSchema } from 'modules/store/employee/management/schemas/address-info.schema';

export const UpdatePersonalEmployeeSchema = Yup.object().shape({
  general: EmployeeGeneralInfoSchema,
  address: EmployeeAddressInfoSchema,
  contacts: EmployeeContactInfoSchema,
});
