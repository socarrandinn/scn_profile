// @ts-nocheck
import * as Yup from 'yup';
import '@dfl/yup-validations';
import { CivilStatusEnum } from 'modules/rrhh/employee/management/constants/civil-status.enum';
import { DiseasesSchema } from 'modules/rrhh/employee/management/schemas/diseases.schema';
import { AllergiesSchema } from 'modules/rrhh/employee/management/schemas/allergies.schema';

export const EmployeeGeneralInfoSchema = Yup.object().shape({
  firstName: Yup.string().required('required'),
  lastName: Yup.string().required('required'),
  birthday: Yup.string().required('required'),
  ci: Yup.string()
    .cubaCi('invalidCi')
    .when('needCi', {
      is: true,
      then: Yup.string().cubaCi('invalidCi').required('required'),
    }),
  gender: Yup.string().required('required'),
  civilStatus: Yup.string().required('required'),
  partner: Yup.string().when('civilStatus', {
    is: CivilStatusEnum.married,
    then: (schema: Yup.StringSchema) => schema.required('required'),
    otherwise: (schema: Yup.StringSchema) => schema,
  }),
  diseases: DiseasesSchema,
  allergies: AllergiesSchema,
  notes: Yup.string().nullable().max(255, 'max-255'),
});
