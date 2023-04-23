export interface HiringInfo {
  recommended: boolean | 'unrecommended' | 'recommended';

  recommendedBy?: string | null;

  date: Date;

  inactiveDate?: Date;

  active: boolean;
}
