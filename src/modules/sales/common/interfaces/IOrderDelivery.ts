export interface IDeliveryTimeRange {
  from: number;
  to: number;
  unit: TimeUnitEnum;
}

export enum TimeUnitEnum {
  HOUR = 'HOUR',
  DAY = 'DAY',
  WEEK = 'WEEK',
}
