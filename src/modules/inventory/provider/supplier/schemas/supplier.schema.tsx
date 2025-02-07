import * as Yup from 'yup';
import '@dfl/yup-validations';
import { AddressInfoSchemaWithLocation, ContactInfoSchema } from 'modules/common/schemas';
import { commonTagsSchema, TagsSchema } from 'modules/inventory/product/schemas/product.schema';

export const tagsSchema = commonTagsSchema.concat(
  Yup.object().shape({
    tags: Yup.object().shape({
      supplier: TagsSchema,
    }),
  }),
);

export const supplierSchema = Yup.object()
  .shape({
    name: Yup.string().required('required').min(2, 'min-2').max(255, 'max-255'),
    address: AddressInfoSchemaWithLocation,
    commission: Yup.number().min(0.0).required().max(100.0),
    contacts: ContactInfoSchema,
  })
  .concat(tagsSchema);

export const supplierAddressSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  address: AddressInfoSchemaWithLocation,
});

export const supplierContactSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  contacts: ContactInfoSchema,
});

export const supplierBasicSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  commission: Yup.number().min(0.0).required().max(100.0).nullable().typeError(''),
});

export const supplierTagsSchema = tagsSchema;
