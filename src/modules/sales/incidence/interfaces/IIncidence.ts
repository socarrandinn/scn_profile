import { IUser } from 'modules/security/users/interfaces/IUser';
import { INCIDENCE_STATUS_ENUM } from '../constants/incidence-status';
import { IFile } from 'components/FileDropZone/interfaces/IFile';

export interface IIncidence {
  _id?: string;
  name?: string;
  description: string;
  orderReference?: string;
  cause?: any;
  code?: string;
  subCause?: any;
  status: INCIDENCE_STATUS_ENUM;
  responsible?: any;
  evidence?: IFile;
  createdBy?: Partial<IUser>;
}
