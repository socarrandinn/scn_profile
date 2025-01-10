import * as Yup from 'yup';
import '@dfl/yup-validations';

export const collectionBannerSchema = Yup.object().shape({
  title: Yup.string(),
  description: Yup.string(),
  withText: Yup.string(),
  startDate: Yup.date(),
  endDate: Yup.date(),
  active: Yup.boolean(),
  position: Yup.number().positive('positive'),
  linkUrl: Yup.string().url('invalidUrl'),
  desktopImage: Yup.string(),
  mobileImage: Yup.string(),
});
