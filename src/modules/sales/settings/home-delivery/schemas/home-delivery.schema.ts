import * as Yup from 'yup';
import '@dfl/yup-validations';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';

const featurePriceSchema = Yup.object().shape({
  price: Yup.number().required('required'),
  value: Yup.number().required('required').min(1, 'min-1-num'),
});

export const homeDeliveryGlobalSchema = Yup.object().shape({
  price: Yup.number().required('required').min(0.01, 'min-1-num'),
  time: Yup.object()
    .shape({
      from: Yup.number().required('required').integer('invalidValue').min(1, 'min-1-num'),
      to: Yup.number().required('required').integer('invalidValue'),
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
  weightPrice: featurePriceSchema.test('weight-price-check', 'min-weight-price', function (weightPrice) {
    if (weightPrice?.price <= 0) {
      return this.createError({
        path: 'weightPrice.value',
        message: 'min-0.01-price',
      });
    }
    return true;
  }),
  volumePrice: featurePriceSchema.test('volume-price-check', 'min-volume-num', function (volumePrice) {
    if (volumePrice?.price <= 0) {
      return this.createError({
        path: 'volumePrice.value',
        message: 'min-0.01-price',
      });
    }
    return true;
  }),
});

export const homeDeliverySchema = Yup.object()
  .shape({
    location: Yup.object().shape({
      type: Yup.string().oneOf(Object.values(LOCATION_TYPE)).required('required'),
      country: Yup.mixed().when('location.type', {
        is: LOCATION_TYPE.COUNTRY,
        then: (schema) => schema.required('required'),
      }),
      state: Yup.mixed().when('location.type', {
        is: LOCATION_TYPE.STATE,
        then: (schema) => schema.required('required').transform((value) => (value?.code || value).toString()),
      }),
      city: Yup.string().when('location.type', {
        is: LOCATION_TYPE.CITY,
        then: (schema) => schema.required('required'),
      }),
    }),
  })
  .concat(homeDeliveryGlobalSchema);
