import * as Yup from 'yup';
import '@dfl/yup-validations';

const socialMediaUrlValidation = Yup.string()
  .matches(
    /((https?):\/\/)?(www.)?(ftp.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'invalid-url',
  )
  .nullable();

export const EmployeeSocialMediaInfoSchema = Yup.object().shape({
  facebook: socialMediaUrlValidation,
  instagram: socialMediaUrlValidation,
  linkedin: socialMediaUrlValidation,
  twitter: socialMediaUrlValidation,
});
