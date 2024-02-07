import * as Yup from 'yup';
import '@dfl/yup-validations';

export const commissionFormScheme = Yup.object().shape({
  suppliers: Yup.array().required('required').min(1, 'atLeast1'),
  commission: Yup.number().required('required'),
});
