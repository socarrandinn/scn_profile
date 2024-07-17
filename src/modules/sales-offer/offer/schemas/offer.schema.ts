import * as Yup from 'yup';
import {
  DISCOUNT_VALUE_TYPE,
  OFFER_TYPE,
  OPERATOR_RULE_OFFER_TYPE,
  RULE_OFFER_TYPE,
} from '../interfaces/offer.type.enum';

export const offerSchema = Yup.object().shape({
  type: Yup.string().default(OFFER_TYPE.SHIPPING_DISCOUNT).nullable().required('required'),
  // discountValue: Yup.number().min(0),
  fromDate: Yup.date().required('required').default(new Date()),
  toDate: Yup.date()
    .required('required')
    .default(new Date())
    .test('toDate-is-max', 'offerOrder:error:date:max', (item: any, testContext: any) => {
      const fromDate = new Date(testContext.parent.fromDate);
      const toDate = new Date(item);
      return fromDate <= toDate;
    }),
  name: Yup.string().required('required').min(2, 'min-2').max(255, 'max-255'),
  description: Yup.string().required('required').min(2, 'min-2'),
  discountValue: Yup.object().when('type', {
    is: '',
    then: (schema) =>
      schema.shape({
        fact: Yup.string().default(DISCOUNT_VALUE_TYPE.FIXED),
        value: Yup.number().default(0).nullable().required('required'),
      }),
  }),
  always: Yup.boolean(),

  // only OFFER_TYPE.INCLUDE_PRODUCT
  includeProducts: Yup.array().when('type', {
    is: OFFER_TYPE.INCLUDE_PRODUCT,
    then: (schema) =>
      schema
        .of(
          Yup.object()
            .shape({
              product: Yup.string().required('required'),
              quantity: Yup.number().default(0).required('reuired'),
            })
            .required('required'),
        )
        .required('required')
        .min(1, 'offerOrder:error:productToInclude:min'),
  }),

  // rules by amonut
  amountSection: Yup.boolean().default(true),
  rulesAmounts: Yup.array().when('amountSection', {
    is: true,
    then: (schema) =>
      schema.of(
        Yup.object().shape({
          fact: Yup.string().default(RULE_OFFER_TYPE.AMOUNT),
          value: Yup.number().positive('offerOrder:error:amount:positive').required('required'),
          operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).required('required').nullable(),
        }),
      ),
  }),

  // category and Price
  amountCategorySection: Yup.boolean().default(true),
  rulesAmountsCategory: Yup.object().when('amountCategorySection', {
    is: true,
    then: (schema) =>
      schema.shape({
        fact: Yup.string().default(RULE_OFFER_TYPE.CATEGORY_PRICE),
        value: Yup.object().shape({
          category: Yup.array().min(1, 'offerOrder:error.category.min-1').required('offerOrder:error.category.min-1'),
          quantity: Yup.number().positive('offerOrder:error:amount:positive'),
        }),
        operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).required('required').nullable(),
      }),
  }),

  // rules by usage
  usageSection: Yup.boolean().default(true),
  rulesUsages: Yup.array().when('usageSection', {
    is: true,
    then: (schema) =>
      schema.of(
        Yup.object().shape({
          fact: Yup.string().default(RULE_OFFER_TYPE.USAGE),
          value: Yup.number().positive('offerOrder:error:usage:positive').required('required'),
          operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).required('required').nullable(),
        }),
      ),
  }),

  // rules quantity_orders
  quantityOrderSection: Yup.boolean().default(true),
  rulesQuantityOrders: Yup.array().when('quantityOrderSection', {
    is: true,
    then: (schema) =>
      schema.of(
        Yup.object().shape({
          fact: Yup.string().default(RULE_OFFER_TYPE.QUANTITY_ORDERS),
          value: Yup.number()
            .moreThan(-1, 'offerOrder:error:quantity_orders:positive')
            .typeError('offerOrder:error:quantity_orders:positive')
            .required('required'),
          operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).required('required').nullable(),
        }),
      ),
  }),

  // rules by address
  addressSection: Yup.boolean().default(true),
  rulesAddress: Yup.object().when('addressSection', {
    is: true,
    then: (schema) =>
      schema.shape({
        fact: Yup.string().default(RULE_OFFER_TYPE.ADDRESS),
        value: Yup.array()
          .of(
            Yup.object().shape({
              municipality: Yup.string()
                .nullable()
                .transform((mun) => (mun === '00' ? null : mun)),
              state: Yup.number().required('required'),
            }),
          )
          .required('required')
          .min(1, 'offerOrder:error:address:min'),
        operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.AT_LEAST_ONE).required('required'),
      }),
  }),

  // rules by products
  productSection: Yup.boolean().default(false),
  rulesProducts: Yup.array().when('productSection', {
    is: true,
    then: (schema) =>
      schema
        .of(
          Yup.object().shape({
            fact: Yup.string().default(RULE_OFFER_TYPE.PRODUCT),
            value: Yup.array()
              .of(
                Yup.object().shape({
                  product: Yup.string().required('required'),
                  quantity: Yup.number()
                    .positive('offerOrder:error:quantity:positive')
                    .integer('offerOrder:error:quantity:integer')
                    .required('required'),
                  operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).nullable().required('required'),
                }),
              )
              .required('required')
              .min(1, 'offerOrder:error:array:product:required'),
            operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).nullable().required('required'),
          }),
        )
        .required('required')
        .min(1, 'offerOrder:error:product:min'),
  }),

  // rules by categorys
  categorySection: Yup.boolean().default(false),
  rulesCategories: Yup.array().when('categorySection', {
    is: true,
    then: (schema) =>
      schema
        .of(
          Yup.object().shape({
            fact: Yup.string().default(RULE_OFFER_TYPE.CATEGORY),
            value: Yup.array()
              .of(
                Yup.object().shape({
                  product: Yup.string().required('required'),
                  quantity: Yup.number()
                    .positive('offerOrder:error:quantity:positive')
                    .integer('offerOrder:error:quantity:integer')
                    .required('required'),
                }),
              )
              .required('required')
              .min(1, 'offerOrder:error:array:category:required'),
            operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).required('required'),
          }),
        )
        .required('required')
        .min(1, 'offerOrder:error:category:min'),
  }),
});
