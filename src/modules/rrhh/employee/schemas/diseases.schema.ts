import * as Yup from 'yup';
import '@dfl/yup-validations';

export const DiseasesSchema = Yup.array().of(Yup.string()).nullable();
