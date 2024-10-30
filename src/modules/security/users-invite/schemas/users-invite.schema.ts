import * as Yup from 'yup';
import '@dfl/yup-validations';
import { IRole } from 'modules/security/roles/interfaces';

export const usersInviteSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().required('required').min(4, 'min-4'),
});

export const commonInvitationSchema = Yup.object().shape({
  email: Yup.string()
    .transform((e) => e.email || e)
    .email('validEmail')
    .max(255)
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'validEmail')
    .required('required'),
  security: Yup.object().shape({
    roles: Yup.array()
      .min(1, 'atLeast1Role')
      .required('required')
      .transform((roles: IRole[]) => roles?.map((role) => role._id || role)),
  }),
});

export const providerInvitationSchema = Yup.object()
  .shape({
    provider: Yup.string().transform((prov) => prov?._id || prov),
  })
  .concat(commonInvitationSchema);

export const warehouseInvitationSchema = Yup.object().shape({
  warehouse: Yup.string().transform((prov) => prov?._id || prov),
});
