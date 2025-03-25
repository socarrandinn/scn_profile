import * as Yup from 'yup';
import '@dfl/yup-validations';
import { INCIDENCE_AUDIENCE_TARGET } from '../interfaces';

export const causesIncidenceSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().required('required').min(4, 'min-4'),
  isPublic: Yup.boolean().default(false),
  // hasChildCauses: Yup.boolean().default(false),
  parent: Yup.string()
    .transform((cause) => cause?._id || cause)
    .nullable(),
  sendNotification: Yup.boolean().default(false),
  notification: Yup.object().when(['sendNotification'], {
    is: true,
    then: (theme) =>
      theme.shape({
        audience: Yup.array().of(
          Yup.object().shape({
            target: Yup.array()
              .of(Yup.string().oneOf(Object.keys(INCIDENCE_AUDIENCE_TARGET)))
              .min(1, 'min-1'),
            template: Yup.string().required('required'),
          }),
        ),
      }),
    otherwise: (scheme) => scheme.transform(() => ({ audience: [{ target: [], template: '' }] })),
  }),
  requiresResponsible: Yup.boolean(),
  requiresEvidence: Yup.boolean(),
});
