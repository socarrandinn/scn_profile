import * as Yup from 'yup';
import '@dfl/yup-validations';

export const DOMAIN_NAME_REGEX = /^[a-zA-Z]+(?:[-.][a-zA-Z]+)*$/;
const SPACE = /^\S+$/;

export const staticSiteMapItemSchema = Yup.object().shape({
  url: Yup.string()
    .min(2, 'min-2')
    .max(61, 'invalidDomain')
    .test('test-no-domain', 'invalidDomain', (text) => (!!text?.match(DOMAIN_NAME_REGEX)))
    .test('test-no-space', 'invalidDomain', (text) => (!!text?.match(SPACE)))
    .required('required'),
  active: Yup.boolean().default(false),
});
