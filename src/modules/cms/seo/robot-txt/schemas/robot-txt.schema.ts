import * as Yup from 'yup';
import '@dfl/yup-validations';

export const robotTxtSchema = Yup.object().shape({
  data: Yup.string().required('required')
});
