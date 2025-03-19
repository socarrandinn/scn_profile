import { INCIDENCE_STATUS } from '../constants/incidence-status';

export interface IIncidence {
  _id?: string;
  name: string;
  description: string;
  orderReference?: string;
  cause?: any;
  subCause?: any;
  status: INCIDENCE_STATUS;
  responsible?: string;
}
