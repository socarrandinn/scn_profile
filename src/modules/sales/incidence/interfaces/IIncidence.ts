import { IUser } from 'modules/security/users/interfaces/IUser';
import { INCIDENCE_STATUS_ENUM } from '../constants/incidence-status';
import { IFile } from 'components/FileDropZone/interfaces/IFile';
import { ORDER_REFERENCE_TYPE } from 'modules/sales/common/constants/order.enum';

export interface IIncidence {
  _id?: string;
  description: string;
  orderReference?: any;
  cause?: any;
  createdBy?: Partial<IUser>;
  code?: string;
  subCause?: any;
  status: INCIDENCE_STATUS_ENUM;
  responsible?: any;
  evidence?: IFile;
  createdBy?: Partial<IUser>;
  createdAt?: string;
  referenceType: ORDER_REFERENCE_TYPE;
}
