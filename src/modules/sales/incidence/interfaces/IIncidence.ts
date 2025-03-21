import { INCIDENCE_STATUS_ENUM } from '../constants/incidence-status';
import { IFile } from 'components/FileDropZone/interfaces/IFile';

export interface IIncidence {
  _id?: string;
  name?: string;
  description: string;
  orderReference?: string;
  cause?: any;
  subCause?: any;
  status: INCIDENCE_STATUS_ENUM;
  responsible?: string;
  evidence?: IFile;
}
