import * as Yup from 'yup';
import '@dfl/yup-validations';

const addressBase = {
  street: Yup.string().required('required'),
  number: Yup.string().required('required'),
  city: Yup.string().required('required'),
  state: Yup.string().required('required'),
  zipCode: Yup.string().required('required'),
  country: Yup.string().required('required'),
  notes: Yup.string().nullable(),
};

export const AddressInfoSchema = Yup.object().shape(addressBase);

export const AddressInfoSchemaWithLocation = Yup.object().shape({
  ...addressBase,
 /*  location: Yup.object().shape({
    type: Yup.string().required('required'),
    coordinates: Yup.array().of(Yup.number()).min(2, 'coordinatesLength').max(2, 'coordinatesLength'),
  }), */
});
