import * as Yup from 'yup';
import '@dfl/yup-validations';

export const storeAreaSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().min(4, 'min-4'),
});

export const updateStatusStorePickup = Yup.object().shape({
  enabled: Yup.boolean().required('required'),
});


export const pickUpPointSchema = Yup.object().shape({
  name: Yup.string().required('required').min(2, 'min-2').max(255, 'max-255'),
  time: Yup.number().positive('positiveNumber')
});