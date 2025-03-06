import * as Yup from 'yup';
import '@dfl/yup-validations';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';

const featurePriceSchema = Yup.object().shape({
  price: Yup.number().required('required').min(0, 'min-0-price').typeError('invalidValue-number'),
  value: Yup.number().required('required').min(0, 'positiveNumber').typeError('invalidValue-number'),
});

const timeSchema = Yup.object().shape({
  from: Yup.number().required('required').min(0, 'positiveNumber').typeError('invalidValue-number'),
  to: Yup.number()
    .required('required')
    .typeError('invalidValue')
    .test('is-greater-than-from', 'toMinFromDays', function (value) {
      const { from } = this.parent;
      if (from !== undefined && value !== undefined) {
        return value > from;
      }
      return true;
    }),
});

export const deliveryGlobalSchema = Yup.object().shape({
  price: Yup.number().required('required').min(0, 'min-0-price').typeError('invalidValue-number'),
  time: timeSchema,
  weightPrice: featurePriceSchema,
  volumePrice: featurePriceSchema,
  hasExpress: Yup.boolean(),
  expressPrice: Yup.number().when('hasExpress', {
    is: true,
    then: (schema) => schema.required('required').min(0, 'positiveNumber').typeError('invalidValue-number'),
    otherwise: (schema) => schema.nullable(),
  }),
  expressTime: Yup.mixed().when('hasExpress', {
    is: true,
    then: (schema) => timeSchema,
    otherwise: (schema) => schema.nullable(),
  }),
});

export const homeDeliverySchema = Yup.object()
  .shape({
    location: Yup.object().shape({
      type: Yup.string().oneOf(Object.values(LOCATION_TYPE)).required('required'),
      country: Yup.mixed()
        .nullable()
        .when('type', {
          is: (value: string) => value === LOCATION_TYPE.COUNTRY,
          then: (schema) => schema.required('required'),
        }),
      state: Yup.mixed()
        .nullable()
        .when('type', {
          is: (value: string) => value === LOCATION_TYPE.STATE,
          then: (schema) => schema.required('required'),
        }),
      city: Yup.mixed()
        .nullable()
        .when('type', {
          is: (value: string) => value === LOCATION_TYPE.MUNICIPALITY,
          then: (schema) => schema.required('required'),
        }),
    }),
  })
  .concat(deliveryGlobalSchema);
