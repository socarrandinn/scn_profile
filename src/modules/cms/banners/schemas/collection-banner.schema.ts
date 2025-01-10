import * as Yup from 'yup';
import '@dfl/yup-validations';

export const collectionBannerSchema = Yup.object().shape({
  title: Yup.string(),
  description: Yup.string(),
  withText: Yup.string(),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date()
    .required('required')
    .test('is-greater', 'endDateGreaterThanStartDate', function (value) {
      const { startDate } = this.parent;
      return value > startDate;
    }),
  active: Yup.boolean(),
  position: Yup.number().positive('positive'),
  linkUrl: Yup.string().url('invalidUrl'),
  desktopImage: Yup.string(),
  mobileImage: Yup.string(),
});
