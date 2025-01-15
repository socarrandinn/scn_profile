import * as Yup from 'yup';
import '@dfl/yup-validations';

export const bannerSchema = Yup.object().shape({
  title: Yup.string(),
  description: Yup.string(),
  withText: Yup.boolean().default(false),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date()
    .required('required')
    .test('is-greater', 'endDateGreaterThanStartDate', function (value) {
      const { startDate } = this.parent;
      return value > startDate;
    }),
  active: Yup.boolean(),
  position: Yup.string(), // .positive('positive'),
  linkUrl: Yup.string().url('invalidUrl'),
  desktopImage: Yup.object().nullable(),
  mobileImage: Yup.object().nullable(),
});
