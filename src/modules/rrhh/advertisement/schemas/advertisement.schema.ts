import * as Yup from 'yup';
import '@dfl/yup-validations';
import { ADVERTISEMENTS_TYPES_VALUES } from 'modules/rrhh/advertisement/constants/advertisement-types.constant';
import {
  ADVERTISEMENTS_AUDIENCE,
  ADVERTISEMENTS_AUDIENCE_VALUES,
} from 'modules/rrhh/advertisement/constants/advertisement-audience.constant';

export const advertisementSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  message: Yup.string().required('required').min(4, 'min-4'),
  type: Yup.string().required('required').oneOf(ADVERTISEMENTS_TYPES_VALUES, 'oneOf'),
  audience: Yup.string().required('required').oneOf(ADVERTISEMENTS_AUDIENCE_VALUES, 'oneOf'),
  employees: Yup.array()
    .of(Yup.string())
    .test('employees-required', 'required', function (value) {
      return this.parent.audience !== ADVERTISEMENTS_AUDIENCE.SPECIFIC || (value && value.length > 0);
    }),
  teams: Yup.array()
    .of(Yup.string())
    .test('teams-required', 'required', function (value) {
      return this.parent.audience !== ADVERTISEMENTS_AUDIENCE.TEAMS || (value && value.length > 0);
    }),
});
