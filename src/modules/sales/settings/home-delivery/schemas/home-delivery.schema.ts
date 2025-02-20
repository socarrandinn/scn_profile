import * as Yup from 'yup';
import '@dfl/yup-validations';
import { IHomeDelivery } from '../interfaces';

export const homeDeliveryGlobalSchema: Yup.Schema<IHomeDelivery> = Yup.object().shape({
  price: Yup.number().required('required').min(1, 'min-1-num'),
  time: Yup.object().shape({
    from: Yup.number().required('required').integer('invalidValue').min(1, 'min-1-num'),
    to: Yup.number().required('required'),
    // .test('is-greater', 'to-must-be-greater-than-from', function (value) {
    //   return value > this.parent.from;
    // })
    // .integer('invalidValue'),
  }),
  weightPrice: Yup.object().shape({
    price: Yup.number().required('required'),
    value: Yup.number().required('required').min(1, 'min-1-num'),
  }),
  volumePrice: Yup.object().shape({
    price: Yup.number().required('required'),
    value: Yup.number().required('required').min(1, 'min-1-num'),
  }),
});
