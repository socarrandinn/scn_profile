import * as Yup from 'yup';
import '@dfl/yup-validations';

export const bannerSchema = Yup.object().shape({
  title: Yup.string().required('required'),
  description: Yup.string(),
  // withText: Yup.boolean().default(false),
  startDate: Yup.date().required('required').typeError('validDate'),
  endDate: Yup.date()
    .required('required')
    .typeError('validDate')
    .test('is-greater', 'endDateGreaterThanStartDate', function (value) {
      const { startDate } = this.parent;
      return value > startDate;
    }),
  active: Yup.boolean().default(false),
  position: Yup.string().required('required'),
  linkUrl: Yup.string().url('invalidUrl').required('required'),
  desktopImage: Yup.object().required('required'),
  mobileImage: Yup.object().required('required'),
});
