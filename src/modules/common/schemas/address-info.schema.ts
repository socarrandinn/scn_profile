import * as Yup from 'yup';
import '@dfl/yup-validations';
import { MS_LOCATION_CONFIG } from 'settings/address-location';

const mixedSchema = Yup.mixed()
  .required('required')
  ?.transform((value) => (value?.code || value).toString());

const addressBase = {
  address1: mixedSchema,
  address2: mixedSchema,
  city: mixedSchema,
  state: mixedSchema,
  houseNumber: Yup.string().required('required'),
  zipCode: Yup.string().required('required'),
  country: Yup.string()
    .required('required')
    .default(MS_LOCATION_CONFIG.isCuban ? 'Cuba' : ''),

  formattedAddress: Yup.string()
    .default('')
    .required('required')
    .transform((value) => value || ''),
};

export const AddressInfoSchema = Yup.object().shape(addressBase);

export const AddressInfoSchemaWithLocation = Yup.object().shape({
  ...addressBase,
  location: Yup.object().shape({
    type: Yup.string().required('required'),
    coordinates: Yup.array().of(Yup.number()).min(2, 'coordinatesLength').max(2, 'coordinatesLength'),
  }),
});
