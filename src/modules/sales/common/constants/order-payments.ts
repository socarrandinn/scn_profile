import enzona from '../../../../assets/images/pay/enzona.png';
import transfermovil from '../../../../assets/images/pay/transfermovil.png';
import come2pay from '../../../../assets/images/pay/come2pay.png';
import bidaiondo from '../../../../assets/images/pay/bidaiondo.png';
import moneri from '../../../../assets/images/pay/moneri.svg';
import ckb from '../../../../assets/images/pay/ckb.png';
import tpp from '../../../../assets/images/pay/tpp.png';
import fake from '../../../../assets/images/pay/fake.png';
import { currencyEnum } from 'settings/space';

export const CURRENCY_KEY = 'currency';

export enum PAYMENT_GATEWAYS_ENUM {
  BALANCE_TUAMBIA = 'BALANCE_TUAMBIA',
  TROPIPAY_GATEWAY_TYPE = 'TROPIPAY_GATEWAY_TYPE',
  CCSALE_TPP = 'CCSALE_TPP',
  TROPIPAY_INTERNAL_GATEWAY_TYPE = 'TROPIPAY_INTERNAL_GATEWAY_TYPE',
  CCSALE_BMS = 'CCSALE_BMS',
  CCSALE_DUC = 'CCSALE_DUC',
  BALANCE_DUC = 'BALANCE_DUC',
  ENZONA_GATEWAY_TYPE = 'ENZONA_GATEWAY_TYPE',
  TRANSFERMOVIL_GATEWAY_TYPE = 'TRANSFERMOVIL_GATEWAY_TYPE',
  COME2PAY_GATEWAY_TYPE = 'COME2PAY_GATEWAY_TYPE',
  BIDAIONDO_GATEWAY_TYPE = 'BIDAIONDO_GATEWAY_TYPE',
  MONERI_GATEWAY_TYPE = 'MONERI_GATEWAY_TYPE',
  CECABANK_GATEWAY_TYPE = 'CECABANK_GATEWAY_TYPE',
  FAKE_GATEWAY_TYPE = 'FAKE_GATEWAY_TYPE',
  BALANCE_TPP = 'BALANCE_TPP',
  CCSALE_ELA = 'CCSALE_ELA',
  CCSALE_XPAY = 'CCSALE_XPAY',
  CCASH_TRANSFER = 'CCASH_TRANSFER',

  // others
  TROPIPAY = 'TROPIPAY',
  TROPYPAY_CARDS = 'TROPYPAY_CARDS',
  TRANSFERENCE = 'TRANSFERENCE',
  BMS = 'BMS',
  REVOLV3 = 'REVOLV3',
}

export const PAYMENT_ICONS: Record<string, string> = {
  ENZONA_GATEWAY_TYPE: '/images/payment-methods/enzona.png',
  TRANSFERMOVIL_GATEWAY_TYPE: '/images/payment-methods/transfermovil.png',
  COME2PAY_GATEWAY_TYPE: '/images/payment-methods/come2pay.png',
  BIDAIONDO_GATEWAY_TYPE: '/images/payment-methods/bidaiondo.png',
  MONERI_GATEWAY_TYPE: '/images/payment-methods/moneri.svg',
  // CECABANK_GATEWAY_TYPE : '/images/payment-methods/ckb.png',
  TROPIPAY_GATEWAY_TYPE: '/images/payment-methods/tropipay.png',
  TROPIPAY_INTERNAL_GATEWAY_TYPE: '/images/payment-methods/tropipay.png',
  FAKE_GATEWAY_TYPE: '/images/payment-methods/fake.png',
  CCSALE_TPP: '/images/payment-methods/tropipay.png',
  BALANCE_TPP: '/images/payment-methods/tropipay.png',
  BALANCE_TUAMBIA: '/images/payment-methods/wallet.png',
  BALANCE_DUC: '/images/payment-methods/ducapp.png',
  CCSALE_BMS: '/images/payment-methods/ccard.png',
  CCSALE_XPAY: '/images/payment-methods/ccard.png',
  CCSALE_DUC: '/images/payment-methods/ccard.png',

  // other
  TROPIPAY: '/images/payment-methods/tropipay.png',
  TROPYPAY_CARDS: '/images/payment-methods/tropipay.png',
  TRANSFERENCE: '',
  BMS: '',
  REVOLV3: '',
};

export const activePayments = {
  [currencyEnum.CUP]: [
    PAYMENT_GATEWAYS_ENUM.ENZONA_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.TRANSFERMOVIL_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.FAKE_GATEWAY_TYPE,
  ],
  [currencyEnum.MLC]: [
    PAYMENT_GATEWAYS_ENUM.ENZONA_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.TRANSFERMOVIL_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.FAKE_GATEWAY_TYPE,
  ],
  [currencyEnum.USD]: [
    PAYMENT_GATEWAYS_ENUM.COME2PAY_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.MONERI_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.BIDAIONDO_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.CECABANK_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.TROPIPAY_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.TROPIPAY_INTERNAL_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.FAKE_GATEWAY_TYPE,
  ],
  [currencyEnum.EUR]: [
    PAYMENT_GATEWAYS_ENUM.COME2PAY_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.BIDAIONDO_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.CECABANK_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.TROPIPAY_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.TROPIPAY_INTERNAL_GATEWAY_TYPE,
    PAYMENT_GATEWAYS_ENUM.FAKE_GATEWAY_TYPE,
  ],
  [currencyEnum.CAD]: [PAYMENT_GATEWAYS_ENUM.MONERI_GATEWAY_TYPE, PAYMENT_GATEWAYS_ENUM.FAKE_GATEWAY_TYPE],
};

export const enabledPayments = new Set([
  PAYMENT_GATEWAYS_ENUM.TRANSFERMOVIL_GATEWAY_TYPE,
  PAYMENT_GATEWAYS_ENUM.CECABANK_GATEWAY_TYPE,
  PAYMENT_GATEWAYS_ENUM.ENZONA_GATEWAY_TYPE,
  PAYMENT_GATEWAYS_ENUM.TROPIPAY_GATEWAY_TYPE,
  // PAYMENT_GATEWAYS_ENUM.TROPIPAY_INTERNAL_GATEWAY_TYPE,
  // PAYMENT_GATEWAYS_ENUM.FAKE_GATEWAY_TYPE,
]);

export const logo = {
  [PAYMENT_GATEWAYS_ENUM.ENZONA_GATEWAY_TYPE]: enzona,
  [PAYMENT_GATEWAYS_ENUM.TRANSFERMOVIL_GATEWAY_TYPE]: transfermovil,
  [PAYMENT_GATEWAYS_ENUM.COME2PAY_GATEWAY_TYPE]: come2pay,
  [PAYMENT_GATEWAYS_ENUM.BIDAIONDO_GATEWAY_TYPE]: bidaiondo,
  [PAYMENT_GATEWAYS_ENUM.MONERI_GATEWAY_TYPE]: moneri,
  [PAYMENT_GATEWAYS_ENUM.CECABANK_GATEWAY_TYPE]: ckb,
  [PAYMENT_GATEWAYS_ENUM.TROPIPAY_GATEWAY_TYPE]: tpp,
  [PAYMENT_GATEWAYS_ENUM.TROPIPAY_INTERNAL_GATEWAY_TYPE]: tpp,
  [PAYMENT_GATEWAYS_ENUM.FAKE_GATEWAY_TYPE]: fake,
};

export const ENZONA = [
  {
    key: 'clientKey',
    label: 'fieldsKey.clientKey.label',
    required: true,
  },
  {
    key: 'clientSecret',
    label: 'fieldsKey.clientSecret.label',
    required: true,
  },
  {
    key: 'urlOk',
    label: 'fieldsKey.urlOk.label',
    required: true,
  },
  {
    key: 'urlNOk',
    label: 'fieldsKey.urlNOk.label',
    required: true,
  },
];

export const TRANSFERMOVIL = [
  {
    key: 'user',
    label: 'fieldsKey.user.label',
    required: true,
  },
  {
    key: 'seed',
    label: 'fieldsKey.seed.label',
    required: true,
  },
  {
    key: 'source',
    label: 'fieldsKey.source.label',
    required: true,
  },
];

export const COME2PAY = [
  {
    key: 'user',
    label: 'fieldsKey.user.label',
    required: true,
  },
  {
    key: 'password',
    label: 'fieldsKey.password.label',
    required: true,
  },
];

export const TROPIPAY_GATEWAY = [
  {
    key: 'user',
    label: 'fieldsKey.user.label',
    required: true,
  },
  {
    key: 'password',
    label: 'fieldsKey.password.label',
    required: true,
  },
  {
    key: 'urlOk',
    label: 'fieldsKey.urlOk.label',
    required: true,
  },
  {
    key: 'urlNOk',
    label: 'fieldsKey.urlNOk.label',
    required: true,
  },
];

export const TROPIPAY_INTERNAL = [
  {
    key: 'user',
    label: 'fieldsKey.user.label',
    required: true,
  },
  {
    key: 'password',
    label: 'fieldsKey.password.label',
    required: true,
  },
  {
    key: 'urlOk',
    label: 'fieldsKey.urlOk.label',
    required: true,
  },
  {
    key: 'urlNOk',
    label: 'fieldsKey.urlNOk.label',
    required: true,
  },
];

export const FAKE_GATEWAY = [
  {
    key: 'password',
    label: 'fieldsKey.password.label',
    required: true,
  },
];

export const BIDAIONDO = [];

export const MONERI = [];

export const CECABANK = [
  {
    key: 'merchantId',
    label: 'fieldsKey.merchantId.label',
    required: true,
  },
  {
    key: 'acquirerBin',
    label: 'fieldsKey.acquirerBin.label',
    required: true,
  },
  {
    key: 'terminalId',
    label: 'fieldsKey.terminalId.label',
    required: true,
  },
  {
    key: 'encryptionKey',
    label: 'fieldsKey.encryptionKey.label',
    required: true,
  },
  {
    key: 'encryption',
    label: 'fieldsKey.encryption.label',
    required: true,
    widget: 'select',
    options: ['SHA2', 'SHA21'],
  },
  {
    key: 'urlOk',
    label: 'fieldsKey.urlOk.label',
    required: true,
  },
  {
    key: 'urlNOk',
    label: 'fieldsKey.urlNOk.label',
    required: true,
  },
];
