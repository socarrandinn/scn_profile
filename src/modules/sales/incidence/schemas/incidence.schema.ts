import * as Yup from 'yup';
import '@dfl/yup-validations';
import { ICausesIncidence } from 'modules/sales/settings/causes-incidence/interfaces';
import { IFile } from 'components/FileDropZone/interfaces/IFile';
import { mapperFile } from 'utils/file-utils';
import { INCIDENCE_ACTION_ENUM, INCIDENCE_ACTIONS_VALUES } from '../constants/incidence-action.enum';

export const incidenceSchema = Yup.object().shape({
  description: Yup.string(),
  cause: Yup.object().shape({
    _id: Yup.string().required('required'),
    name: Yup.string().required('required'),
    hasChildCauses: Yup.boolean(),
  }),
  subCause: Yup.object().when('cause', {
    is: (cause: ICausesIncidence) => cause?.hasChildCauses,
    then: (schema) => schema.required('required'),
    otherwise: (schema) => schema.strip(),
  }),
  responsible: Yup.string().when('cause', {
    is: (cause: ICausesIncidence) => cause?.requiresResponsible,
    then: (schema) => schema.required('required').transform((responsible) => responsible?._id || responsible),
    otherwise: (schema) => schema.transform((responsible) => responsible?._id || responsible),
  }),
  evidence: Yup.array().when('cause', {
    is: (cause: ICausesIncidence) => cause?.requiresEvidence,
    then: (schema) =>
      schema.min(1, 'required').transform((values) => values?.map((file: IFile) => mapperFile(file)) || []),
    otherwise: (schema) => schema.transform((values) => values?.map((file: IFile) => mapperFile(file)) || []),
  }),
  orderReference: Yup.string().transform((order) => order?._id || order),
});

export const incidenceCommentSchema = Yup.object().shape({
  comment: Yup.string().required('required'),
  attachments: Yup.array().when('cause', {
    is: (cause: ICausesIncidence) => cause?.requiresEvidence,
    then: (schema) =>
      schema.min(1, 'required').transform((values) => values?.map((file: IFile) => mapperFile(file)) || []),
    otherwise: (schema) => schema.transform((values) => values?.map((file: IFile) => mapperFile(file)) || []),
  }),
});

export const incidenceActionsSchema = Yup.object().shape({
  note: Yup.string(),
  actionType: Yup.string().oneOf(INCIDENCE_ACTIONS_VALUES ),
});
