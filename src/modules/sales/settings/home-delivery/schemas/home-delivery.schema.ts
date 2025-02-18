import * as Yup from 'yup';
import '@dfl/yup-validations';
import { IHomeDelivery } from '../interfaces';

export const homeDeliverySchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().required('required').min(4, 'min-4'),
});

export const homeDeliveryGlobalSchema: Yup.Schema<IHomeDelivery> = Yup.object().shape({
  price: Yup.number().required('required').min(1, 'min-1-num'),
  time: Yup.object().shape({
    from: Yup.number().required('required').min(1, 'min-1-num'),
    to: Yup.number().required('required').min(1, 'min-1-num'),
  }),
  weightPrice: Yup.object().shape({
    price: Yup.number().required('required'),
    value: Yup.number().required('required').min(1, 'min-1'),
  }),
  volumePrice: Yup.object().shape({
    price: Yup.number().required('required'),
    value: Yup.number().required('required').min(1, 'min-1-num'),
  }),
});
