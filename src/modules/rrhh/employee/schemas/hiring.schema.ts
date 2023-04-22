import * as Yup from 'yup';

export const HiringInfoSchema = Yup.object().shape({
  recommended: Yup.boolean().required('required'),
  recommendedBy: Yup.string().required('required'),
  date: Yup.date().required('required'),
});
