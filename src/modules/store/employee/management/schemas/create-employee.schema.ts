import * as Yup from 'yup';
import { EmployeeContactInfoSchema } from 'modules/store/employee/management/schemas/contact-info.schema';
import { HiringInfoSchema } from 'modules/store/employee/management/schemas/hiring.schema';
import { JobInformationSchema } from 'modules/store/employee/management/schemas/job-information.schema';
import { EmployeeGeneralInfoSchema } from 'modules/store/employee/management/schemas/general-info.schema';
import { EmployeeAddressInfoSchema } from 'modules/store/employee/management/schemas/address-info.schema';
import { CompensationInfoSchema } from 'modules/store/employee/management/schemas/compensation.schema';

export const CreateEmployeeSchema = Yup.object().shape({
  general: EmployeeGeneralInfoSchema,
  address: EmployeeAddressInfoSchema,
  contacts: EmployeeContactInfoSchema,
  hiring: HiringInfoSchema,
  compensation: CompensationInfoSchema,
  jobInformation: JobInformationSchema,
  hasUser: Yup.boolean().required('required'),
});
