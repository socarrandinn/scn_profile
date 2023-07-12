import * as Yup from 'yup';
import '@dfl/yup-validations';
import { DEFAULT_PHONE_LABELS } from 'modules/common/components/FormContactInput/phone/phones-types.constant';
import { DEFAULT_EMAIL_LABELS } from 'modules/common/components/FormContactInput/email/email-types.constant';

const emailValidation = Yup.string()
  .matches(
    // eslint-disable-next-line
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'validEmail',
  )
  .nullable();
export const PhoneInfoSchema = Yup.object().shape({
  // @ts-ignore
  value: Yup.string().phone('validPhone').required('required'),
  label: Yup.mixed().oneOf(DEFAULT_PHONE_LABELS).required('required'),
  principal: Yup.boolean().required('required'),
});
export const EmailInfoSchema = Yup.object().shape({
  // @ts-ignore
  value: emailValidation.max(255, 'max-255').required('required'),
  label: Yup.mixed().oneOf(DEFAULT_EMAIL_LABELS).required('required'),
  principal: Yup.boolean().required('required'),
});

Yup.addMethod(Yup.array, 'unique', function (field, message) {
  return this.test('unique', message, function (array) {
    const uniqueData = Array.from(new Set(array?.map((row) => row[field]?.toLowerCase())));
    const isUnique = array?.length === uniqueData.length;
    if (isUnique) {
      return true;
    }
    const index = array?.findIndex((row, i) => row[field]?.toLowerCase() !== uniqueData[i]);
    if (!array || !index) return true;

    if (array[index][field] === '') {
      return true;
    }
    return this.createError({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      path: `${this.path}.${index}.${field}`,
      message,
    });
  });
});

export const EmployeeContactInfoSchema = Yup.object().shape({
  // @ts-ignore
  phones: Yup.array().of(PhoneInfoSchema).min(1, 'min-1-item').unique('value', 'uniquePhoneNumber'),
  // @ts-ignore
  emails: Yup.array().of(EmailInfoSchema).min(1, 'min-1-item').unique('value', 'uniqueEmail'),
});
