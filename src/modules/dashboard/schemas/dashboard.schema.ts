import * as Yup from 'yup';
import '@dfl/yup-validations';

export const cardSchema = Yup.object().shape({
  thumb: Yup.string().required('required'),
  type: Yup.string().required('required').default('images'),
  url: Yup.string().required('required'),
});

export const shopConfirmSchema = Yup.object().shape({
  onboardingCompleted: Yup.boolean().default(false),
});

export const logoSchema = Yup.object().shape({
  logo: Yup.string().required('required'),
});
