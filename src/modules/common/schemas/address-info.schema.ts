import * as Yup from 'yup';
import '@dfl/yup-validations';
import { ADDRESS_COUNTRY_CODE } from 'settings/address-location';

const mixedSchema = Yup.mixed()
  .required('required')
  ?.transform((value) => {
    return (value?.code || value).toString()
  });

const baseAddress = {
  city: mixedSchema,
  state: mixedSchema,
  country: Yup.string()
    .required('required')
    ?.transform((c) => c?.code || c),
};

const cubanAddress = {
  address1: mixedSchema,
  address2: mixedSchema,
  houseNumber: Yup.string().required('required'),
  zipCode: Yup.string(),
  formattedAddress: Yup.string()
    .default('')
    .required('required')
    .transform((value) => value || ''),
};

const internationalAddress = {
  address1: Yup.string()
    .required('required')
    .transform((value) => value?.display_name || value).trim(),
  houseNumber: Yup.string(),
  address2: Yup.string().nullable(),
  zipCode: Yup.string().required('required'),
  city: Yup.string().required('required'),
  state: Yup.string().required('required'),
  // formattedAddress: Yup.string().required('required'),
};

export const AddressInfoSchema = Yup.object().shape(baseAddress);

export const AddressInfoSchemaWithLocation = Yup.object().shape({
  ...baseAddress,
  ...(ADDRESS_COUNTRY_CODE === 'CU' ? cubanAddress : internationalAddress),
  location: Yup.object().shape({
    // type: Yup.string().required('required'),
    coordinates: Yup.array().of(Yup.number()).min(2, 'coordinatesLength').max(2, 'coordinatesLength'),
  }),
});
