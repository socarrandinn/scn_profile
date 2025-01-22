import * as Yup from 'yup';
import '@dfl/yup-validations';
import { AddressInfoSchema, AddressInfoSchemaWithLocation, ContactInfoSchema } from 'modules/common/schemas';
import { commonTagsSchema, TagsSchema } from 'modules/inventory/product/schemas/product.schema';

const handlingCost = Yup.number()
  .typeError('required')
  .required('required')
  .min(0.0, 'logistics:errors.handlingCost.greaterThanZero');

const tagsSchema = commonTagsSchema.concat(
  Yup.object().shape({
    tags: Yup.object().shape({
      logistic: TagsSchema,
    }),
  }),
);

export const logisticsSchema = Yup.object()
  .shape({
    name: Yup.string().required('required').min(2, 'min-2').max(255, 'max-255'),
    active: Yup.boolean().required(),
    address: AddressInfoSchemaWithLocation,
    handlingCost,
    contacts: ContactInfoSchema,
    commission: Yup.number()
      .min(0.0, 'min-0-num')
      .required('required')
      .max(100.0, 'max-100-num')
      .nullable()
      .typeError('required'),
  })
  .concat(tagsSchema);

export const logisticAddressSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  address: AddressInfoSchema,
});

export const logisticContactSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  contacts: ContactInfoSchema,
});

export const logisticBasicSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  handlingCost,
});

export const logisticsBulkUpdateHandlingCost = Yup.object().shape({
  handlingCost,
  logistics: Yup.array().required('required').min(1, 'logistics:errors.min-1'),
});

export const logisticUserScheme = Yup.object().shape({
  users: Yup.array().required('required').min(1, 'logistics:errors.users.min-1'),
  role: Yup.object().required('required'),
  warehouse: Yup.object(),
});

export const logisticTagsSchema = tagsSchema;
