import * as Yup from 'yup';
import '@dfl/yup-validations';
import { AddressInfoSchemaWithLocation, ContactInfoSchema } from 'modules/common/schemas';
import { PRICE_TYPE } from 'modules/inventory/common/constants/price-type.enum';
const logistic = Yup.string().required('required');
const description = Yup.string().min(4, 'min-4').max(255, 'max-255');

export const commissionValueSchema = Yup.object().shape({
  type: Yup.string(),
  value: Yup.number().when('type', (type, schema) => {
    if (type.includes(PRICE_TYPE.FIXED)) {
      return schema.concat(Yup.number().min(1, 'min-1-num').typeError('invalidValue-number'));
    } else if (type.includes(PRICE_TYPE.PERCENT)) {
      return schema.concat(Yup.number().min(1, 'min-1-num').max(100, 'max-100-num').typeError('invalidValue-number'));
    } else {
      return schema;
    }
  }),
});

export const handlingCostSchema = Yup.object().required('required').shape({
  handlingCost: commissionValueSchema,
});

export const distributionCentersSchema = Yup.object()
  .shape({
    name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
    description,
    visible: Yup.boolean().required('required'),
    logistic,
    contacts: ContactInfoSchema,
    address: AddressInfoSchemaWithLocation,
  })
  .concat(handlingCostSchema);

export const warehouseLocationsSchema = Yup.object().shape({
  locations: Yup.array().required('warehouse:deliveryRequired').min(1, 'warehouse:deliveryRequired'),
});

export const addWarehousesSchema = Yup.object().shape({
  warehouses: Yup.array()
    .required('required')
    .min(1, 'atLeast1Warehouse')
    .transform((warehouses) => warehouses.map((w: any) => w._id || w)),

  distributionCenter: Yup.string()
    .required('required')
    .transform((dc) => dc?._id || dc),
});
