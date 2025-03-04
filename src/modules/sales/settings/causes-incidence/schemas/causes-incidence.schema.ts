import * as Yup from 'yup';
import '@dfl/yup-validations';
import { CAUSES_INCIDENCE_TYPE_ENUM, INCIDENCE_AUDIENCE_TARGET } from '../interfaces';

export const causesIncidenceSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().required('required').min(4, 'min-4'),
  isPublic: Yup.boolean().default(false),
  hasChildCauses: Yup.boolean().default(true),
  childCauses: Yup.array().when(['hasChildCauses'], {
    is: true,
    then: (theme) =>
      theme
        .of(Yup.string().oneOf(Object.keys(CAUSES_INCIDENCE_TYPE_ENUM)))
        .required('required')
        .min(1, 'min-1'),
    otherwise: (scheme) => scheme.strip(),
  }),

  notification: Yup.object().shape({
    enabled: Yup.boolean().required('required'),
    audience: Yup.array().when(['enabled'], {
      is: true,
      then: (theme) =>
        theme.of(
          Yup.object().shape({
            target: Yup.array().of(Yup.string().oneOf(Object.keys(INCIDENCE_AUDIENCE_TARGET))),
            template: Yup.string().required('required'),
          }),
        ),
      otherwise: (scheme) => scheme.strip(),
    }),
  }),
});
