import * as Yup from 'yup';
import '@dfl/yup-validations';

export const commissionFormScheme = Yup.object().shape({
  suppliers: Yup.array().required('required'),
  commission: Yup.number().required('required'),
});
