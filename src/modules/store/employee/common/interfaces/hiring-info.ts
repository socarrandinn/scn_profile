import { RecommendedEnum } from 'modules/store/employee/management/constants/recomended.enum';

export interface HiringInfo {
  recommended: boolean | RecommendedEnum;

  recommendedBy?: string | null;

  date: Date;

  inactiveDate?: Date;

  active: boolean;
}
