import { INCIDENCE_STATUS } from '../constants/incidence-status';

export interface IIncidence {
  _id?: string;
  name: string;
  description: string;
  orderReference: string;
  cause: {
    _id?: string;
    name: string;
  };
  subCause?: {
    _id?: string;
    name: string;
  };
  status: INCIDENCE_STATUS;
  responsible?: string;
}
