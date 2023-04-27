import * as Yup from 'yup';
import '@dfl/yup-validations';

const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

const unique = (list?: string[]) => {
  return list?.length === new Set((list || []).map((value: string) => value.trim().toLowerCase())).size;
};

const userSchema = Yup.object().shape({
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
  skills: Yup.array()
    .of(Yup.string().required('Skill is required').min(3, 'The skill has to have at least 3 characters'))
    .min(1, 'At least one field is required')
    .test('unique', 'The skill have to be unique', unique),
});

export { userSchema };
