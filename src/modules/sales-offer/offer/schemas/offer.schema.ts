import * as Yup from 'yup';
import {
  DISCOUNT_VALUE_TYPE,
  OFFER_TYPE,
  OPERATOR_RULE_OFFER_TYPE,
  PERIOD_RULE_OFFER_TYPE,
  RULE_OFFER_FACT_TYPE,
} from '../interfaces/offer.type.enum';
import { offerTypeTwoForOneSchema } from 'modules/sales-offer/common/schemas/common.schema';

export const offerClientSchema = Yup.object().shape({
  section: Yup.object().shape({
    clientUsage: Yup.boolean().default(false),
    orderCountByTime: Yup.boolean().default(false),
    amountSpentByTime: Yup.boolean().default(false),
    longevity: Yup.boolean().default(false),
    specificClientList: Yup.boolean().default(false),
  }),

  // rules by amonut
  rulesClientUsage: Yup.object().when('section.clientUsage', {
    is: true,
    then: (schema) =>
      schema.shape({
        fact: Yup.string().default(RULE_OFFER_FACT_TYPE.CLIENT_USAGES),
        value: Yup.number()
          .integer('offerOrder:error:clientUsage:integer')
          .positive('offerOrder:error:clientUsage:positive')
          .required('required'),
        operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.LESS_THAN).required('required').nullable(),
      }),
    otherwise: (schema) => schema.strip(),
  }),

  // rules by orderCountByTime
  rulesOrderCountByTime: Yup.object().when('section.orderCountByTime', {
    is: true,
    then: (schema) =>
      schema.shape({
        fact: Yup.string().default(RULE_OFFER_FACT_TYPE.ORDER_COUNT_BY_TIME),
        operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).required('required').nullable(),
        value: Yup.object().shape({
          amount: Yup.number()
            .positive('offerOrder:error.orderCountByTime.positive')
            .integer('offerOrder:error.orderCountByTime.integer')
            .required('required'),
          interval: Yup.string().oneOf(Object.keys(PERIOD_RULE_OFFER_TYPE)).required('required'),
        }),
      }),
  }),
  // rules by amountSpentByTime
  rulesAmountSpentByTime: Yup.object().when('section.amountSpentByTime', {
    is: true,
    then: (schema) =>
      schema.shape({
        fact: Yup.string().default(RULE_OFFER_FACT_TYPE.ORDER_COUNT_BY_TIME),
        operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).required('required').nullable(),
        value: Yup.object().shape({
          amount: Yup.number().positive('offerOrder:error.amountSpentByTime.positive').required('required'),
          interval: Yup.string().oneOf(Object.keys(PERIOD_RULE_OFFER_TYPE)).required('required'),
        }),
      }),
    otherwise: (schema) => schema.strip(),
  }),

  // rules by amountSpentByTime
  rulesLongevity: Yup.object().when('section.longevity', {
    is: true,
    then: (schema) =>
      schema.shape({
        fact: Yup.string().default(RULE_OFFER_FACT_TYPE.ORDER_COUNT_BY_TIME),
        operator: Yup.string()
          .oneOf(Object.keys(OPERATOR_RULE_OFFER_TYPE))
          .default(OPERATOR_RULE_OFFER_TYPE.EQUAL)
          .required('required')
          .nullable(),
        value: Yup.object().shape({
          amount: Yup.number()
            .positive('offerOrder:error.longevity.positive')
            .integer('offerOrder:error.longevity.integer')
            .required('required'),
          unit: Yup.string().oneOf(Object.keys(PERIOD_RULE_OFFER_TYPE)).required('required'),
        }),
      }),
    otherwise: (schema) => schema.strip(),
  }),

  // rules by specificClientList
  rulesSpecificClientList: Yup.object().when('section.specificClientList', {
    is: true,
    then: (schema) =>
      schema.shape({
        fact: Yup.string().default(RULE_OFFER_FACT_TYPE.ORDER_COUNT_BY_TIME),
        operator: Yup.string()
          .oneOf(Object.keys(OPERATOR_RULE_OFFER_TYPE))
          .default(OPERATOR_RULE_OFFER_TYPE.EQUAL)
          .required('required')
          .nullable(),
        value: Yup.array()
          .min(1, 'offerOrder:error.specificClientList.min-1')
          .required('offerOrder:error.specificClientList.min-1')
          .transform((value) => value.map((item: any) => item._id || item)),
      }),
    otherwise: (schema) => schema.strip(),
  }),
});

export const offerByTypeSchema = Yup.object().shape({
  // only OFFER_TYPE.INCLUDE_PRODUCT
  includeProducts: Yup.array().when('type', {
    is: OFFER_TYPE.INCLUDE_PRODUCT,
    then: (schema) =>
      schema
        .of(
          Yup.object()
            .shape({
              product: Yup.string().required('required'),
              quantity: Yup.number().default(0).required('required'),
            })
            .required('required'),
        )
        .required('required')
        .min(1, 'offerOrder:error:productToInclude:min'),
  }),

  // only OFFER_TYPE.TWO_FOR_ONE_OPERATOR
  twoForOneOffers: Yup.array().when('type', {
    is: OFFER_TYPE.TWO_FOR_ONE,
    then: (schema) =>
      schema.of(offerTypeTwoForOneSchema).required('required').min(1, 'offerOrder:error:twoForOneOffer:min'),
    otherwise: (schema) => schema.strip(),
  }),
});

export const offerSchema = Yup.object()
  .shape({
    note: Yup.string()
      .nullable()
      .transform((value) => value || null),
    type: Yup.string().default(OFFER_TYPE.SHIPPING_DISCOUNT).nullable().required('required'),
    section: Yup.object().shape({
      amount: Yup.boolean().default(false),
      amountCategory: Yup.boolean().default(false),
      usage: Yup.boolean().default(false),
      quantityOrder: Yup.boolean().default(false),
      address: Yup.boolean().default(false),
      productSection: Yup.boolean().default(false),
    }),
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
    always: Yup.boolean().default(false),

    // rules by amonut
    rulesAmounts: Yup.object().when('section.amount', {
      is: true,
      then: (schema) =>
        schema.shape({
          fact: Yup.string().default(RULE_OFFER_FACT_TYPE.AMOUNT),
          value: Yup.number().positive('offerOrder:error:amount:positive').required('required'),
          operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).required('required').nullable(),
        }),
      otherwise: (schema) => schema.strip(),
    }),

    // rules by usage
    rulesUsages: Yup.object().when('section.usage', {
      is: true,
      then: (schema) =>
        schema.shape({
          fact: Yup.string().default(RULE_OFFER_FACT_TYPE.USAGE),
          value: Yup.number()
            .integer('offerOrder:error:usage:integer')
            .positive('offerOrder:error:usage:positive')
            .required('required'),
          operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).required('required').nullable(),
        }),
      otherwise: (schema) => schema.strip(),
    }),

    // rules quantity_orders
    rulesQuantityOrders: Yup.array().when('section.quantityOrder', {
      is: true,
      then: (schema) =>
        schema.of(
          Yup.object().shape({
            fact: Yup.string().default(RULE_OFFER_FACT_TYPE.QUANTITY_ORDERS),
            value: Yup.number()
              .moreThan(-1, 'offerOrder:error:quantity_orders:positive')
              .typeError('offerOrder:error:quantity_orders:positive')
              .required('required'),
            operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).required('required').nullable(),
          }),
        ),
    }),

    // rules by address

    rulesAddress: Yup.object().when('section.address', {
      is: true,
      then: (schema) =>
        schema.shape({
          fact: Yup.string().default(RULE_OFFER_FACT_TYPE.ADDRESS),
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

    // category and Price
    rulesAmountsCategory: Yup.object().when('section.amountCategory', {
      is: true,
      then: (schema) =>
        schema.shape({
          fact: Yup.string().default(RULE_OFFER_FACT_TYPE.CATEGORY_PRICE),
          value: Yup.array()
            .of(
              Yup.object().shape({
                category: Yup.string().required('required'),
                amount: Yup.number()
                  .positive('offerOrder:error:quantity:positive')
                  .integer('offerOrder:error:quantity:integer')
                  .required('required'),
                operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).required('required'),
              }),
            )
            .required('required')
            .min(1, 'offerOrder:error:array:category:required'),
          operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).required('required'),
        }),
      otherwise: (schema) => schema.strip(),
    }),

    // rules by products
    rulesProducts: Yup.object().when('section.product', {
      is: true,
      then: (schema) =>
        schema.shape({
          fact: Yup.string().default(RULE_OFFER_FACT_TYPE.PRODUCT),
          value: Yup.array()
            .of(
              Yup.object().shape({
                product: Yup.string().required('required'),
                quantity: Yup.number()
                  .positive('offerOrder:error:quantity:positive')
                  .integer('offerOrder:error:quantity:integer')
                  .required('required'),
                operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.EQUAL).required('required'),
              }),
            )
            .required('required')
            .min(1, 'offerOrder:error:array:product:required'),
          operator: Yup.string().default(OPERATOR_RULE_OFFER_TYPE.ALL).required('required'),
        }),
      otherwise: (schema) => schema.strip(),
    }),
  })
  .concat(offerClientSchema)
  .concat(offerByTypeSchema);
