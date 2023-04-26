export enum CompensationType {
  SALARY = 'salary',
  REMUNERATION = 'remuneration',
}

export enum PaymentType {
  FIXED = 'fixed',
  ON_DEMAND = 'onDemand',
  VARIABLE = 'variable',
}

export enum Frequency {
  ANNUAL = 'annual',
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  SEMIANNUAL = 'semiannual',
  BIWEEKLY = 'biweekly',
}

export const CompensationTypeValues = Object.values(CompensationType);

export const PaymentTypeValues = Object.values(PaymentType);

export const FrequencyValues = Object.values(Frequency);
