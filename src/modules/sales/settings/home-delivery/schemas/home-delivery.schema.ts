import * as Yup from 'yup';
import '@dfl/yup-validations';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';

const featurePriceSchema = Yup.object().shape({
  price: Yup.number().required('required').min(0, 'min-0-price').typeError('invalidValue-number'),
  value: Yup.number().required('required').min(0, 'positiveNumber').typeError('invalidValue-number'),
});

export const deliveryGlobalSchema = Yup.object().shape({
  price: Yup.number().required('required').min(0, 'positiveNumber').typeError('invalidValue-number'),
  time: Yup.object()
    .shape({
      from: Yup.number().required('required').min(0, 'min-0-num').typeError('invalidValue-number'),
      to: Yup.number().required('required').typeError('invalidValue'),
    })
    .test('to-must-be-greater', 'to-must-be-greater-than-from', function (time) {
      if (time?.to < time?.from) {
        return this.createError({
          path: 'time.from',
          message: 'toMinFromDays',
        });
      }
      return true;
    }),
  weightPrice: featurePriceSchema,
  volumePrice: featurePriceSchema,
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
