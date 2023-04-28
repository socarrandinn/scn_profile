import * as Yup from 'yup';
import { EmployeeContactInfoSchema } from 'modules/rrhh/employee/schemas/contact-info.schema';
import { HiringInfoSchema } from 'modules/rrhh/employee/schemas/hiring.schema';
import { JobInformationSchema } from 'modules/rrhh/employee/schemas/job-information.schema';
import { EmployeeGeneralInfoSchema } from 'modules/rrhh/employee/schemas/general-info.schema';
import { EmployeeAddressInfoSchema } from 'modules/rrhh/employee/schemas/address-info.schema';
import { CompensationInfoSchema } from 'modules/rrhh/employee/schemas/compensation.schema';
import { EmployeeSocialMediaInfoSchema } from 'modules/rrhh/employee/schemas/social-media-info.schema';

export const CreateEmployeeSchema = Yup.object().shape({
  general: EmployeeGeneralInfoSchema,
  address: EmployeeAddressInfoSchema,
  contacts: EmployeeContactInfoSchema,
  hiring: HiringInfoSchema,
  compensation: CompensationInfoSchema,
  jobInformation: JobInformationSchema,
  social: EmployeeSocialMediaInfoSchema,
  hasUser: Yup.boolean().required('required'),
});
