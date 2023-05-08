import { RecommendedEnum } from 'modules/rrhh/employee/constants/recomended.enum';

export interface HiringInfo {
  recommended: boolean | RecommendedEnum;

  recommendedBy?: string | null;

  date: Date;

  inactiveDate?: Date;

  active: boolean;
}
