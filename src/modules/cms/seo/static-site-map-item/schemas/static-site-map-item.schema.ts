import * as Yup from 'yup';
import '@dfl/yup-validations';

export const PATH_REGEX = /^(\/[a-zA-Z0-9-_]+)*\/?$/;
const SPACE = /^\S+$/;

export const staticSiteMapItemSchema = Yup.object().shape({
  url: Yup.string()
    .min(2, 'min-2')
    .max(61, 'invalidPath')
    .test('test-no-path', 'invalidPath', (text) => !!text?.match(PATH_REGEX))
    .test('test-no-space', 'invalidPath', (text) => !!text?.match(SPACE))
    .required('required'),
  active: Yup.boolean().default(false),
});
