import * as Yup from 'yup';
import '@dfl/yup-validations';
import { MS_LOCATION_CONFIG } from 'settings/address-location';

const mixedSchema = Yup.mixed()
  .required('required')
  ?.transform((value) => (value?.code || value).toString());

const baseAddress = {
  address1: mixedSchema,
  city: mixedSchema,
  state: mixedSchema,
  country: Yup.string()
    .required('required')
    ?.transform((c) => c?.code || c),
};

const cubanAddress = {
  houseNumber: Yup.string().required('required'),
  address2: mixedSchema,
  zipCode: Yup.string(),
  formattedAddress: Yup.string()
    .default('')
    .required('required')
    .transform((value) => value || ''),
};

const internationalAddress = {
  houseNumber: Yup.string(),
  address2: Yup.string(),
  zipCode: Yup.string().required('required'),
  formattedAddress: Yup.string().default('').required('required'),
  // geoCode: Yup.mixed(),
};

export const AddressInfoSchema = Yup.object().shape(baseAddress);

export const AddressInfoSchemaWithLocation = Yup.object().shape({
  ...baseAddress,
  ...(MS_LOCATION_CONFIG?.isCuban ? cubanAddress : internationalAddress),
  location: Yup.object().shape({
    type: Yup.string().required('required'),
    coordinates: Yup.array().of(Yup.number()).min(2, 'coordinatesLength').max(2, 'coordinatesLength'),
  }),
});
