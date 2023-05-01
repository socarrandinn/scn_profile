import * as Yup from 'yup';
import '@dfl/yup-validations';
import { CIVIL_STATUS_ENUM } from '../utils';

export const userSchema = Yup.object().shape({
  name: Yup.string()
    .required('The name is required.')
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, {
      name: 'nameValidator',
      message: 'The first name is invalid',
      excludeEmptyString: true,
    }),
  civilStatus: Yup.string().oneOf(Object.values(CIVIL_STATUS_ENUM), 'Unknown civil status'),
  otherCivilStatusDescription: Yup.string()
    .typeError('You must specify the civil status')
    .when('civilStatus', {
      is: CIVIL_STATUS_ENUM.OTHER,
      then: (schema) =>
        schema
          .required('The description is required')
          .min(3, 'The description must have more than 2 characters.')
          .max(20, 'The description must have less than 20 characters.'),
      otherwise: (schema) => schema // Only needed if you want to specify another validation schema otherwise it can be omitted.
    }),
});
