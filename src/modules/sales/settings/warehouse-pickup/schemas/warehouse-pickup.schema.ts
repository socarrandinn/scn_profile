import * as Yup from 'yup';
import '@dfl/yup-validations';

export const warehouseAreaSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().min(4, 'min-4'),
});

export const updateStatusWarehousePickup = Yup.object().shape({
  enabled: Yup.boolean().required('required'),
});

const addressBase = {
  address: Yup.string().required('required'),
  city: Yup.string().required('required'),
  state: Yup.string().required('required'),
  country: Yup.string().required('required'),
};

export const pickUpPointSchema = Yup.object().shape({
  name: Yup.string().required('required').min(2, 'min-2').max(255, 'max-255'),
  time: Yup.number().positive('positiveNumber'),
  location: Yup.object().shape(addressBase),
});
