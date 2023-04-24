import * as Yup from 'yup';
import '@dfl/yup-validations';

export const AllergiesSchema = Yup.array().of(Yup.string()).nullable();
