import * as Yup from 'yup';
import '@dfl/yup-validations';
import { IRole } from 'modules/security/roles/interfaces';

export const userInvitationSchema = Yup.object().shape({
  email: Yup.string()
    .transform((e) => e.email || e)
    .email('validEmail')
    .max(255)
    .required('required'),
  roles: Yup.array()
    .min(1, 'atLeast1Role')
    .required('required')
    .transform((roles: IRole[]) => roles?.map((role) => role._id || role)),
});
