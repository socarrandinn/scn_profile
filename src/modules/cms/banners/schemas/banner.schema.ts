import * as Yup from 'yup';
import '@dfl/yup-validations';
import { BANNER_ELEMENT_OPERATION } from '../interfaces';

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
  // position: Yup.string().required('required'),
  linkUrl: Yup.string().url('invalidUrl').required('required'),
  desktopImage: Yup.object().required('required'),
  mobileImage: Yup.object().required('required'),
});

export const createBannerSchema = Yup.object().shape({
  banner: bannerSchema,
  collection: Yup.string()
    .required('required')
    .transform((c) => c?._id || c),
  operation: Yup.string().when(['collection'], {
    is: (collection: string) => !collection,
    then: (schema) => schema.required('required').oneOf(Object.keys(BANNER_ELEMENT_OPERATION)),
  }),
});

export const bannerByCollectionIdSchema = Yup.object()
  .shape({
    collectionId: Yup.string().required('required'),
  })
  .concat(bannerSchema);

export const bannerPositionSchema = Yup.object().shape({
  collectionId: Yup.string().required('required'),
  elements: Yup.array().of(Yup.string().required('required')),
});
