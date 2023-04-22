import * as Yup from 'yup';
import '@dfl/yup-validations';
import { DEFAULT_PHONE_LABELS } from 'modules/common/components/FormContactInput/phone/phones-types.constant';
import { DEFAULT_EMAIL_LABELS } from 'modules/common/components/FormContactInput/email/email-types.constant';

export const PhoneInfoSchema = Yup.object().shape({
  // @ts-ignore
  value: Yup.string().phone('validPhone').required('required'),
  label: Yup.mixed().oneOf(DEFAULT_PHONE_LABELS).required('required'),
  principal: Yup.boolean().required('required'),
});
export const EmailInfoSchema = Yup.object().shape({
  // @ts-ignore
  value: Yup.string().email('validEmail').max(255, 'max-255').required('required'),
  label: Yup.mixed().oneOf(DEFAULT_EMAIL_LABELS).required('required'),
  principal: Yup.boolean().required('required'),
});

export const EmployeeContactInfoSchema = Yup.object().shape({
  phones: Yup.array().of(PhoneInfoSchema).min(1, 'min-1-item'),
  emails: Yup.array().of(EmailInfoSchema).min(1, 'min-1-item'),
});
