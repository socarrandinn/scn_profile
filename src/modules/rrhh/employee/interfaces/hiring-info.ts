export interface HiringInfo {
  recommended: boolean | 'unrecommended' | 'recommended';

  recommendedBy?: string;

  date: Date;

  inactiveDate?: Date;

  active: boolean;
}
