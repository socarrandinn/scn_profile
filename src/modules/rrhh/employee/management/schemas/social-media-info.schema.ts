import * as Yup from 'yup';
import '@dfl/yup-validations';

const urlRegex =
  /((https?):\/\/)?(www.)?(ftp.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

const socialMediaUrlValidation = Yup.lazy((value) =>
  /^data/.test(value) ? Yup.string().trim().matches(urlRegex, 'invalid-url') : Yup.string().trim().url('invalid-url'),
);

export const EmployeeSocialMediaInfoSchema = Yup.object().shape({
  facebook: socialMediaUrlValidation,
  instagram: socialMediaUrlValidation,
  linkedin: socialMediaUrlValidation,
  twitter: socialMediaUrlValidation,
});
