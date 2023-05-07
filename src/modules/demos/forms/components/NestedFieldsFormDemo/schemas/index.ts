import * as Yup from 'yup';
import '@dfl/yup-validations';

const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

const jobSchema = Yup.object().shape({
  position: Yup.string().required('The position is required'),
  department: Yup.string().required('The department is required'),
});

export const userSchema = Yup.object().shape({
  firstName: Yup.string().required('The first name is required.').matches(nameRegex, {
    name: 'firstNameValidator',
    message: 'The first name is invalid',
    excludeEmptyString: true,
  }),
  lastName: Yup.string().required('The last name is required.').matches(nameRegex, {
    name: 'lastNameValidator',
    message: 'The last name is invalid',
    excludeEmptyString: true,
  }),
  job: jobSchema,
});
