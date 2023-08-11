import * as Yup from 'yup';
import '@dfl/yup-validations';

const addressBase = {
  address: Yup.string().required('required'),
  municipality: Yup.string().required('required'),
  state: Yup.string().required('required'),
  // country: Yup.string().required('required'),
  // zipCode: Yup.string().required('required'),
  zipCode: Yup.string(),
}

export const AddressInfoSchema = Yup.object().shape(
  addressBase
);

export const AddressInfoSchemaWithLocation = Yup.object().shape({
  ...addressBase,
  location: Yup.object().shape({
    coordinates: Yup.array().of(Yup.number()).min(2, 'size-2').max(2, 'size-2')
  })
});
